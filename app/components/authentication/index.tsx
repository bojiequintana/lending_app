import { useLoaderData, useLocation } from "@remix-run/react";
import { loader } from "~/root";
import LoginForm from "./_LoginForm";
import PageNotFound from "../page-not-found";

interface IProps {
  children: React.ReactNode;
}
const Authentication = (props: IProps) => {
  const { pathname } = useLocation();
  const data = useLoaderData<typeof loader>();
  return data?.isAuthenticated ? (
    props.children
  ) : (
    <div className="w-screen h-dvh flex justify-center items-center">
      {pathname === "/" ? <LoginForm /> : <PageNotFound />}
    </div>
  );
};

export default Authentication;
