import { UserDTO } from "~/entities/UserEntity";
import dataSource from "~/datasource";
import { ROLES } from "~/constants/tableNames";
import { formatDate } from "~/utils/formatDate";
import { RoleDTO, RoleEntity } from "~/entities/RoleEntity";
import { capitalizeFirstLetter } from "~/utils/capitalizeFirstLetter";

export const createRoleDTO = (dataList: RoleEntity[]): RoleDTO[] => {
  const users = dataList.map(
    ({ id, name, created_at }) =>
      ({
        id,
        name: capitalizeFirstLetter(name),
        created_at: formatDate(created_at),
      } as RoleDTO)
  );
  return users;
};

const users = dataSource<RoleEntity>(ROLES);
export const getRoles = async () => {
  return (await users).read();
};

export const createRole = async (payload: UserDTO) => {
  return (await users).create<UserDTO>({ payload });
};

export const getRolesById = async (id: string) => {
  const usersData = await users;
  return usersData.readById(id);
};
