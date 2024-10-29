import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { loader } from "~/root";
import LoginForm from "./_LoginForm";
import PageNotFound from "../page-not-found";
import { useSupabaseClient } from "~/hooks/useSupabaseClient";

interface IProps {
  children: React.ReactNode;
}
const Authentication = (props: IProps) => {
  const { pathname } = useLocation();
  const { serverSession, env } = useLoaderData<typeof loader>();
  const { loginWithThirdParty } = useSupabaseClient({ env, serverSession });
  let renderedElement = (
    <div className="w-screen h-dvh flex justify-center items-center">
      <PageNotFound />
    </div>
  );

  if (serverSession) {
    renderedElement = <>{props.children}</>;
  } else {
    if (pathname === "/")
      renderedElement = (
        <div className="w-screen h-dvh flex justify-center items-center">
          <LoginForm onSubmit={() => {}} />
        </div>
      );
    if (pathname === "/auth/callback") renderedElement = <Outlet />;
  }
  return renderedElement;
};

export default Authentication;
