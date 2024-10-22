import { IDefaultFields } from "./_base/IDefaultFields";
import { RoleEntity } from "./RoleEntity";
export interface UserEntity extends IDefaultFields {
  email: string;
  roles: RoleEntity;
}

export interface UserDTO {
  id: string;
  email: string;
  roleId: string;
  roleName: string;
  created_at: string;
}
