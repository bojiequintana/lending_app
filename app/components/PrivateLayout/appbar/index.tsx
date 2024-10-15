const Appbar = () => {
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1"></div>
      <div className="flex-none gap-2">
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
            role="button"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#item1" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="#item2">Settings</a>
            </li>
            <li>
              <a href="#item3">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
