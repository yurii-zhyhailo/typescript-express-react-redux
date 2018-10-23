import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize, Instance } from 'sequelize';

import { UserAttributes, UserInstance } from './interfaces';

export default (sequelize: Sequelize, dataTypes: DataTypes):
SequelizeStatic.Model<UserInstance, UserAttributes> => {

    const User = sequelize.define<UserInstance, UserAttributes>('User', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        firstName: {
            type: dataTypes.STRING,
            field: 'first_name'
        },
        lastName: {
            type: dataTypes.STRING,
            field: 'last_name'
        },
        bio: dataTypes.TEXT,
        email: {
            type: dataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: dataTypes.STRING,
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
        tableName: 'users',
        indexes: [],
        paranoid: true,
        underscored: true
    });

    User.beforeCreate(async (user: any, options: object) => {
        //@todo implement bcrypt
        user.password = 'hash';
        return user;
    });

    User.afterDestroy((user: UserInstance, options: Object) => {
        sequelize.models.UserRole.destroy({where: {user_id: user.dataValues.id}, individualHooks: true});
    });

    return User;
}
