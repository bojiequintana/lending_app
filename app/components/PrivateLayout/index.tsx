import Appbar from "./appbar";
import Sidenav from "./sidenav";

const PrivateLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-dvw h-dvh flex overflow-hidden">
      <Sidenav />
      <div className="flex-1 flex flex-col">
        <Appbar />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
