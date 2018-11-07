import * as fs from 'fs';
import * as path from 'path';
import * as SequelizeStatic from 'sequelize';
import {Sequelize} from 'sequelize';

import { UserAttributes, UserInstance } from './interfaces';
import { RoleAttributes, RoleInstance } from './interfaces';
import { UserRoleAttributes, UserRoleInstance } from './interfaces';

export interface SequelizeModels {
    User: SequelizeStatic.Model<UserInstance, UserAttributes>;
    Role: SequelizeStatic.Model<RoleInstance, RoleAttributes>;
    UserRole: SequelizeStatic.Model<UserRoleInstance, UserRoleAttributes>;
}

export interface DbEnvConfig {
    database: string,
    username: string,
    password: string,
    host: string,
    operatorsAliases: boolean,
    storage?: string
}

export interface DbConfig {
[key: string]: DbEnvConfig;
}

const dbConfig: DbConfig = require('../config/database');
const env: string = process.env.NODE_ENV || 'development';
const config: DbEnvConfig = dbConfig[env];
const basename: string = path.basename(module.filename);

const _sequelize: Sequelize = new SequelizeStatic(
    config.database, config.username, config.password,
    {...config, operatorsAliases: false, logging: false}
  );
  
  let _models: any = {};

//we dynamically load all the models for a given directory
const files: Array<any> = fs.readdirSync(__dirname);
files.filter((file: any) => {
  return (file.indexOf('.') !== 0) && (file !== basename)
         && (file.slice(-3) === '.js' || file.slice(-3) === '.ts')
         && (file !== 'interfaces');
  }).forEach((file: any)  => {
    let model: any = _sequelize.import(path.join(__dirname, file));
    _models[model.name] = model;
  });

  _models.Role.belongsToMany(_models.User, { through: _models.UserRole, as: 'users', onDelete: 'CASCADE', individualHooks: true});
  _models.User.belongsToMany(_models.Role, { through: _models.UserRole, as: 'roles', onDelete: 'CASCADE', individualHooks: true});

  //we will export models and sequelize instance
export const models: SequelizeModels = _models;
export const sequelize: Sequelize = _sequelize;
