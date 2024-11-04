import { Link, useLocation } from "@remix-run/react";
import Icon from "~/components/ui/Icon";

const Settings = () => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        to="/settings"
        className={`no-underline flex gap-5   ${
          pathname === "/settings" && "font-bold"
        }`}
      >
        <Icon name="settings" />
        <span>Settings</span>
      </Link>
    </li>
  );
};

export default Settings;
