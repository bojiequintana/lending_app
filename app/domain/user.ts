import { IDefaultFields } from "~/datasource/types/IDefaultFields";

export interface UserEntity extends IDefaultFields {
  userId: number;
  title: string;
  completed: boolean;
}

export interface UserDTO {
  title: string;
}
