import {Instance} from "sequelize";

export interface UserRoleAttributes {
  id: number,
  user_id: number,
  role_id: number,
  deletedAt: string
}

export interface UserRoleInstance extends Instance<UserRoleAttributes> {
  dataValues: UserRoleAttributes;
}