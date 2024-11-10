import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import PrivateLayout from "~/components/private-layout";
import { authenticator, handleAuthExpiration } from "~/utils/auth/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Lending App" },
    { name: "description", content: "Welcome to lending app" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const authResponse = await authenticator.isAuthenticated(request);
  if (!authResponse) {
    return redirect("/login");
  }
  const userPayload = await handleAuthExpiration(authResponse);
  return userPayload;
}

const Private = () => {
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default Private;
