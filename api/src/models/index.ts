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
