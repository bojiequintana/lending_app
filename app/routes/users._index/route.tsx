import Breadcrumbs from "~/components/ui/Breadcrumbs";
import Button from "~/components/ui/Button";
import { createUserDTO, getUsers } from "~/data-access/userRepository";
import SearchForm from "./_SearchForm";
import TableDisplay from "./_TableDisplay";
import { useLocation, useNavigate } from "@remix-run/react";
import { ADD } from "~/constants/formTypes";

export async function loader() {
  const users = await getUsers();
  return createUserDTO(users);
}

function UsersPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between items-center ">
        <Breadcrumbs />
        <Button
          label="Add users"
          className="hidden sm:block"
          onClick={() => navigate(`${pathname}/${ADD}`)}
        />
      </div>
      <div className="rounded-btn p-10 shadow-sm bg-base-100 flex flex-col gap-3">
        <div className="flex w-full justify-between gap-5">
          <div />
          <SearchForm />
        </div>
        <TableDisplay />
      </div>
    </div>
  );
}

export default UsersPage;
