import MenuRoutes from "../menu-routes";

const Sidenav = () => {
  return (
    <ul className="menu bg-base-100 h-dvh mt-0 w-60">
      <li>
        <a
          href="#item1"
          className="no-underline flex items-center justify-center"
        >
          <span className="text-xl font-bold">Lending App</span>
        </a>
      </li>
      <MenuRoutes />
    </ul>
  );
};

export default Sidenav;
