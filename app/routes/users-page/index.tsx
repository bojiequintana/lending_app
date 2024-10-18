import { json, useLoaderData } from "@remix-run/react";
import Breadcrumbs from "~/components/ui/Breadcrumbs";
import Button from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";
import InputIcon from "~/components/ui/InputIcon";
import Table from "~/components/ui/Table";
import { getUsers } from "~/data-access/userRepository";
import { UserEntity } from "~/entities/UserEntity";

export async function loader() {
  return json(await getUsers());
}

function UsersPage() {
  const users = useLoaderData<UserEntity[]>();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between items-center">
        <Breadcrumbs />
        <Button label="Add users" className="hidden sm:block" />
      </div>
      <div className="rounded-btn p-10 shadow-sm bg-base-100 flex flex-col gap-3">
        <div className="flex w-full justify-between gap-5">
          <div />
          <div className="w-full max-w-md">
            <InputIcon
              placeholder="Search..."
              className="bg-base-300/40"
              icon={<Icon name="search" />}
            />
          </div>
        </div>
        <div className=" hidden sm:block">
          <Table
            columns={[
              { label: "Name", value: "name" },
              {
                label: "",
                value: "",
                render: (id) => (
                  <div>
                    <button className="btn btn-xs">
                      <Icon name="edit" /> Edit
                    </button>
                  </div>
                ),
              },
            ]}
            dataSource={[
              { id: 1, age: "18", name: "Bojie" },
              { id: 2, age: "18", name: "Bojie" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
