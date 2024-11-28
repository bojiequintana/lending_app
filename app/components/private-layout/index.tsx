import FooterNav from "./footer-nav";
import Sidenav from "./sidenav";

const PrivateLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-dvw h-dvh flex overflow-x-hidden bg-base-200">
      <div className="sticky top-0 hidden sm:block">
        <Sidenav />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="h-dvh bg-transparent">{children}</div>
        {/* <div className="sticky bottom-0 navbar p-0 flex items-end sm:hidden">
          <FooterNav />
        </div> */}
      </div>
    </div>
  );
};

export default PrivateLayout;
