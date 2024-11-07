import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import Button from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";
import InputIcon from "~/components/ui/InputIcon";
import { authenticator } from "~/utils/auth/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  return authenticator.authenticate("keycloak", request);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request);
  if (user) {
    return redirect("/");
  }
  return {};
}

const Login = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <Form
        method="post"
        className="prose rounded-badge max-w-lg w-full bg-base-100 flex justify-center items-center flex-col gap-8 p-10 "
      >
        <h1>Lending App</h1>
        <InputIcon
          icon={<Icon name="email" />}
          placeholder="Email"
          name="email"
        />
        <InputIcon
          icon={<Icon name="password" />}
          placeholder="Password"
          type="password"
          name="password"
        />
        <Button type="submit" label="Login with Keycloak" className="w-full" />
      </Form>
    </div>
  );
};

export default Login;
