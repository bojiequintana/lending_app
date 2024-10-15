import { json, useLoaderData } from "@remix-run/react";
import Table from "~/components/ui/table";
import { getUsers } from "~/data-access/userRepository";
import { UserEntity } from "~/domain/user";

export async function loader() {
  return json(await getUsers());
}

function UsersPage() {
  const users = useLoaderData<UserEntity[]>();
  return (
    <div className="flex flex-col">
      <Table />
    </div>
  );
}

export default UsersPage;
