import { useNavigate, useOutletContext } from "@remix-run/react";
import MenuRoutes from "../menu-routes";
import Settings from "../menu-routes/_Settings";
import Icon from "~/components/ui/Icon";
import { OutletContextType } from "~/types/OutletContextType";

const Sidenav = () => {
  const navigate = useNavigate();
  const { user } = useOutletContext<OutletContextType>();
  return (
    <ul className="menu bg-base-100 h-dvh mt-0 w-64 gap-2">
      <li>
        <div className="relative no-underline flex items-center mb-3 mt-2">
          {/* <img src={logo} alt="logo" className="w-8 absolute" /> */}
          <span className="text-xl font-bold ml-10">Lending App</span>
        </div>
      </li>
      <MenuRoutes />
      <div className="flex-1 flex items-end w-full">
        <div className="grid grid-cols-2 gap-3">
          <Settings />
          <button className="btn btn-sm" onClick={() => navigate("/logout")}>
            <Icon name="logout" />
          </button>
        </div>
        {/* <li className="w-full">
          <div className="relative no-underline flex items-center mb-3 mt-2 w-full">
            <Icon name="user" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">{user?.name ?? ""}</span>
              <span className="text-xs">{user?.email ?? ""}</span>
            </div>
          </div>
        </li> */}
      </div>
    </ul>
  );
};

export default Sidenav;
