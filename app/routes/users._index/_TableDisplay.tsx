import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import Icon from "~/components/ui/Icon";
import Table from "~/components/ui/Table";
import { loader } from "./route";
import { EDIT } from "~/constants/formTypes";

const TableDisplay = () => {
  const users = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className=" hidden sm:block">
      <Table
        columns={[
          { label: "Email", value: "email" },
          {
            label: "Roles",
            value: "roleName",
          },
          { label: "Created at", value: "created_at" },
          {
            label: "",
            value: "",
            alignment: "center",
            render: (id) => (
              <div>
                <button
                  className="btn btn-xs"
                  onClick={() => navigate(`${pathname}/${EDIT}/${id}`)}
                >
                  <Icon name="edit" /> Edit
                </button>
              </div>
            ),
          },
        ]}
        dataSource={users}
      />
    </div>
  );
};

export default TableDisplay;
