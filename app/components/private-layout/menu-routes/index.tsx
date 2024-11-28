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
          <Icon name="user" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to="/all-customers"
          className={`no-underline flex gap-5    ${
            pathname.includes("/all-customers") && "font-bold"
          }`}
        >
          <Icon name="users" />
          <span>All Customers</span>
        </Link>
      </li>
      <li>
        <Link
          to="/for-verification"
          className={`no-underline flex gap-5   ${
            pathname.includes("/for-verification") && "font-bold"
          }`}
        >
          <Icon name="edit" />
          <span>For Verification</span>
        </Link>
      </li>
      <li>
        <Link
          to="/update-required"
          className={`no-underline flex gap-5   ${
            pathname.includes("/update-required") && "font-bold"
          }`}
        >
          <Icon name="message" />
          <span>Update required</span>
        </Link>
      </li>
    </>
  );
};

export default MenuRoutes;
