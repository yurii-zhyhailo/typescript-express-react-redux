import { Instance } from 'sequelize';

export interface RoleAttributes {
    id: string;
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string
}

export interface RoleInstance extends Instance<RoleAttributes> {
    dataValues: RoleAttributes;
}
