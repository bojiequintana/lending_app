import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import Button from "~/components/ui/Button";
import { authenticator } from "~/utils/auth/auth.server";
import { loader as userLoader } from "~/root";

export async function action({ request }: ActionFunctionArgs) {
  return authenticator.authenticate("keycloak", request);
}

export async function loader(loaderFunc: LoaderFunctionArgs) {
  const user = await userLoader(loaderFunc);
  if (user) {
    return redirect("/");
  }
  return user;
}

const Login = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-base-200">
      <Form
        method="post"
        className="prose rounded-badge max-w-lg w-full bg-base-100 flex justify-center items-center flex-col gap-8 p-10 shadow-xl"
      >
        <h1>Lending App</h1>
        <Button type="submit" label="Login with Keycloak" className="w-full" />
      </Form>
    </div>
  );
};

export default Login;
