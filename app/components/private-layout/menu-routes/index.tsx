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
          to="/messages"
          className={`no-underline flex gap-5   ${
            pathname === "/messages" && "font-bold"
          }`}
        >
          <Icon name="message" />
          <span>Messages</span>
        </Link>
      </li>
    </>
  );
};

export default MenuRoutes;
