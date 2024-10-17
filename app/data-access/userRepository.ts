import { UserDTO, UserEntity } from "~/entities/UserEntity";
import dataSource from "~/datasource";

const users = dataSource<UserEntity>("users");

export const getUsers = async () => {
  return (await users).read();
};

export const createUsers = async (payload: UserDTO) => {
  return (await users).create<UserDTO>({ payload });
};

export const getUsersById = async (id: string) => {
  const usersData = await users;
  return usersData.readById(id);
};
