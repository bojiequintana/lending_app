import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import PrivateLayout from "~/components/private-layout";
import { loader as userLoader } from "~/root";
import { handleRefreshTokenExpiration } from "~/utils/auth/middleware.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Lending App" },
    { name: "description", content: "Welcome to lending app" },
  ];
};

export async function loader(loaderFunc: LoaderFunctionArgs) {
  const { request } = loaderFunc;
  const user = await userLoader(loaderFunc);
  if (!user) {
    try {
      if (await handleRefreshTokenExpiration(request)) {
        return redirect("/logout");
      }
      return redirect("/login");
    } catch (e) {
      return redirect("/login");
    }
  }
  return user;
}

const Private = () => {
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default Private;
