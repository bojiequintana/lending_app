import { json, useLoaderData } from "@remix-run/react";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";
import Table from "~/components/ui/table";
import { getUsers } from "~/data-access/userRepository";
import { UserEntity } from "~/entities/UserEntity";

export async function loader() {
  return json(await getUsers());
}

function UsersPage() {
  const users = useLoaderData<UserEntity[]>();
  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full justify-between gap-5">
        <div className="w-full max-w-md">
          <Input placeholder="Search..." className="bg-base-100" />
        </div>
        <Button label="Add users" />
      </div>
      <div className="rounded-btn p-10 shadow-sm bg-base-100">
        <Table />
      </div>
    </div>
  );
}

export default UsersPage;
