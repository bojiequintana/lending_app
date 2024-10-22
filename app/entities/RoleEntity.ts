import { IDefaultFields } from "./_base/IDefaultFields";
export interface RoleEntity extends IDefaultFields {
  name: string;
}

export interface RoleDTO {
  id: string;
  name: string;
  created_at: string;
}
