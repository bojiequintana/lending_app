import MenuRoutes from "../menu-routes";

const Sidenav = () => {
  return (
    <ul className="menu bg-primary/30 h-dvh mt-0 w-60 border-r">
      <li>
        <a
          href="#item1"
          className="no-underline flex items-center justify-center"
        >
          <span className="text-xl text-primary-content">Lending App</span>
        </a>
      </li>
      <MenuRoutes />
    </ul>
  );
};

export default Sidenav;
