import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { RoleAttributes, RoleInstance } from "./interfaces/role";
import { SequelizeModels } from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<RoleInstance, RoleAttributes> => {
  const Role = sequelize.define<RoleInstance, RoleAttributes>("Role", {
    id: {
        type: dataTypes.NUMBER,
        primaryKey: true
    },
    name: dataTypes.STRING,
    description: dataTypes.TEXT,
    deletedAt: {
        type: dataTypes.DATE,
        field: 'deleted_at'
    },
    createdAt: {
        type: dataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: dataTypes.DATE,
        field: 'updated_at'
    }
  }, {
    tableName: 'roles',
    indexes: [],
    paranoid: true,
    underscored: true
  });

  Role.afterDestroy((role: RoleInstance, options: Object) => {
    sequelize.models.UserRole.destroy({where: {role_id: role.dataValues.id}, individualHooks: true});
  });

  return Role;
}
