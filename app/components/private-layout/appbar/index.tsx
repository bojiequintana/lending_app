import { useNavigate } from "@remix-run/react";
import Icon from "~/components/ui/Icon";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar shadow-sm bg-base-100 z-50">
      <div className="navbar-start flex gap-3 w-full">
        <h2 className="m-0 p-0 text-lg px-5">Header</h2>
      </div>
      <button className="btn" onClick={() => navigate("/logout")}>
        <Icon name="logout" /> Logout
      </button>
    </div>
  );
};

export default Appbar;
