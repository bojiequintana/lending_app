import { UserDTO, UserEntity } from "~/entities/UserEntity";
import dataSource from "~/datasource";
import { ROLES, USERS } from "~/constants/tableNames";
import { formatDate } from "~/utils/formatDate";

export const createUserDTO = (dataList: UserEntity[]): UserDTO[] => {
  const users = dataList.map(
    ({ id, email, roles, created_at }) =>
      ({
        id,
        email,
        roleId: roles.id,
        roleName: roles.name,
        created_at: formatDate(created_at),
      } as UserDTO)
  );
  return users;
};

const users = dataSource<UserEntity>(USERS, [ROLES]);
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
