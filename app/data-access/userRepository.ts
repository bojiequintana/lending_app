import { UserDTO, UserEntity } from "~/domain/user";
import dataSource from "~/datasource";

const users = dataSource<UserEntity>("users");

export const getUsers = async () => {
  return (await users).read();
};

export const create = async (payload: UserDTO) => {
  return (await users).create<UserDTO>({ payload });
};

export const getUsersById = async (id: string) => {
  const usersData = await users;
  return usersData.readById(id);
};
