import Appbar from "./appbar";
import FooterNav from "./footer-nav";
import Sidenav from "./sidenav";

const PrivateLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-dvw h-dvh flex overflow-x-hidden">
      <div className="sticky top-0 hidden sm:block">
        <Sidenav />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0">
          <Appbar />
        </div>
        <div className="px-2 sm:px-10 h-dvh py-5 bg-base-300/50">
          {children}
        </div>
        <div className="sticky bottom-0 navbar p-0 flex items-end sm:hidden">
          <FooterNav />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
