import { json, useLoaderData } from "@remix-run/react";
import { getUsers } from "~/data-access/userRepository";
import { UserEntity } from "~/domain/user";

export async function loader() {
  return json(await getUsers());
}

function UsersPage() {
  const users = useLoaderData<UserEntity[]>();
  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UsersPage;
