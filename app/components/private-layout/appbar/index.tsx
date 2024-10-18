import LogoutButton from "~/components/logout-button";
import NavBurger from "./_NavBurger";
import Icon from "~/components/ui/Icon";

const Appbar = () => {
  return (
    <div className="navbar shadow-sm bg-base-100">
      <div className="navbar-start sm:hidden">
        <NavBurger />
        <div className="sm:hidden font-bold">Lending App</div>
      </div>
      <div className="flex-1 hidden sm:block"></div>
      <div className="navbar-end sm:hidden">
        <button className="btn">
          <Icon name="notification" />
        </button>
      </div>
      <div className="flex-none gap-2 hidden sm:block">
        <div className="dropdown dropdown-end">
          <div className="flex items-center gap-3">
            <div className="font-bold">Admin</div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full relative bg-red-400">
                <img
                  className="absolute -top-7"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#item1" className="no-underline">
                Profile
              </a>
            </li>
            <li>
              <a href="#item2" className="justify-between no-underline">
                Notification
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="#item3" className="no-underline">
                Settings
              </a>
            </li>
            <div className="flex justify-end w-full py-5 px-2">
              <LogoutButton />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
