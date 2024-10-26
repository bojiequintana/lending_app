import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { loader } from "~/root";
import LoginForm from "./_LoginForm";
import PageNotFound from "../page-not-found";

interface IProps {
  children: React.ReactNode;
}
const Authentication = (props: IProps) => {
  const { pathname } = useLocation();
  const data = useLoaderData<typeof loader>();
  let renderedElement = (
    <div className="w-screen h-dvh flex justify-center items-center">
      <PageNotFound />
    </div>
  );
  if (data?.isAuthenticated) {
    renderedElement = <>{props.children}</>;
  } else {
    if (pathname === "/")
      renderedElement = (
        <div className="w-screen h-dvh flex justify-center items-center">
          <LoginForm />
        </div>
      );
    if (pathname === "/auth/callback") renderedElement = <Outlet />;
  }
  return renderedElement;
};

export default Authentication;
