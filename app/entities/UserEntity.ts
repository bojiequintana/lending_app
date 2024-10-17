import { IDefaultFields } from "./_base/IDefaultFields";
export interface UserEntity extends IDefaultFields {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface UserDTO {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
