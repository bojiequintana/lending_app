import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import PrivateLayout from "~/components/private-layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Lending App" },
    { name: "description", content: "Welcome to lending app" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const headers = request.headers;
  console.log("headers", headers.get("Cookie"));
  return redirect("/login");
}
const Private = () => {
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default Private;
