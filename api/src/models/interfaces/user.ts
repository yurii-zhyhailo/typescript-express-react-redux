import { Instance } from 'sequelize';

export interface UserAttributes {
    id?: number;
    firstname?: string;
    lastname?: string;
    bio?: string;
    email?: string;
    password?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}

export interface UserInstance extends Instance<UserAttributes> {
    dataValues: UserAttributes;
    roles: RoleInstance[];
    posts: PostInstance[];
}
