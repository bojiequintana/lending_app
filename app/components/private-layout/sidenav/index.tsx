import MenuRoutes from "../menu-routes";
import Settings from "../menu-routes/_Settings";

const Sidenav = () => {
  return (
    <ul className="menu bg-base-100 h-dvh mt-0 w-64">
      <li>
        <div className="relative no-underline flex items-center mb-3 mt-2">
          {/* <img src={logo} alt="logo" className="w-8 absolute" /> */}
          <span>LA</span>
          <span className="text-xl font-bold ml-10">Lending App</span>
        </div>
      </li>
      <MenuRoutes />
      <Settings />
    </ul>
  );
};

export default Sidenav;
