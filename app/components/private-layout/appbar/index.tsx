import Avatar from "~/components/ui/Avatar";

const Appbar = () => {
  // const navigate = useNavigate();
  return (
    <div className="navbar shadow-sm bg-base-100 z-50">
      <div className="navbar-start flex gap-3 w-full">
        <h2 className="m-0 p-0 text-lg px-5">Header</h2>
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle">
          <Avatar />
        </button>
      </div>
    </div>
  );
};

export default Appbar;
