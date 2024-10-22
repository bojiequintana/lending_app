import { Link, useLocation } from "@remix-run/react";
import Icon from "~/components/ui/Icon";

const MenuRoutes = () => {
  const { pathname } = useLocation();
  return (
    <>
      <li>
        <Link
          to="/"
          className={`no-underline flex gap-5    ${
            pathname === "/" && "font-bold"
          }`}
        >
          <Icon name="home" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to="/users"
          className={`no-underline flex gap-5   ${
            pathname === "/users-page" && "font-bold"
          }`}
        >
          <Icon name="info" />
          <span>Users</span>
        </Link>
      </li>
      <li>
        <Link
          to="/creditsss"
          className={`no-underline flex gap-5   ${
            pathname === "/credits" && "font-bold"
          }`}
        >
          <Icon name="signal" />
          <span>Credits</span>
        </Link>
      </li>
    </>
  );
};

export default MenuRoutes;
