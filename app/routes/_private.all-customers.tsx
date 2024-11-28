import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import FooterNav from "~/components/private-layout/footer-nav";
import Avatar from "~/components/ui/Avatar";
import Breadcrumbs from "~/components/ui/Breadcrumbs";
import Button from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";
import InputIcon from "~/components/ui/InputIcon";
const AllCustomersLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeIndex = pathname === "/all-customers" ? 0 : 1;
  return (
    <div>
      <div className="sticky top-0 z-[1000] h-20">
        <div className="navbar shadow-sm bg-base-100 z-50 h-20 ">
          {activeIndex === 0 ? (
            <div className="navbar-start flex gap-3 w-full">
              <div className="flex gap-2">
                <Button label="All" />
                <Button label="Initial Validation" shape={"outline"} />
                <Button label="Internal Checking" shape={"outline"} />
                <Button label="Phone Credit Verification" shape={"outline"} />
                <Button label="Corrections Pending" shape={"outline"} />
              </div>
            </div>
          ) : (
            <div className="navbar-start flex gap-3 w-full">
              <div className="prose px-3">
                <h2>Client Profile</h2>
              </div>
            </div>
          )}
          <div className="navbar-end flex items-center gap-3">
            <div className="flex-1">
              <InputIcon
                icon={<Icon name="search" />}
                placeholder="Name, phone number or email..."
              />
            </div>
            <button className="btn btn-circle">
              <Avatar />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 sticky top-20 z-[1000] bg-base-200 py-3 items-center sm:px-10 w-full justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-10 flex justify-end">
            {activeIndex === 1 && (
              <button className="btn btn-xs" onClick={() => navigate(-1)}>
                <Icon name="back" />
              </button>
            )}
            {activeIndex === 0 && (
              <div className="pr-3">
                <Icon name="home" />
              </div>
            )}
          </div>
          <div className="">
            <Breadcrumbs
              items={["All Customers", "Client profile"]}
              activeIndex={activeIndex}
            />
          </div>
        </div>
        {activeIndex === 1 && (
          <div className="flex gap-2 items-center prose">
            <Button label="Assign to me" />
          </div>
        )}
      </div>
      <div className="px-2 sm:px-10 py-5 pb-10 ">
        <Outlet />
      </div>
      <div className="sticky bottom-0 z-[1000] navbar p-0 flex items-end sm:hidden bg-base-100">
        <FooterNav />
      </div>
    </div>
  );
};

export default AllCustomersLayout;
