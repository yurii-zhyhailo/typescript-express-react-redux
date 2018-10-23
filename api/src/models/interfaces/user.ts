import { Instance } from 'sequelize';
import { RoleInstance } from './role';

export interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    bio: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export interface UserInstance extends Instance<UserAttributes> {
    dataValues: UserAttributes;
    roles: RoleInstance[];
}
