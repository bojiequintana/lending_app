import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  console.log("body", body.get("email"));
  return redirect(`/`);
}

const Login = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <Form
        method="post"
        className="prose rounded-badge max-w-lg w-full bg-base-100 flex justify-center items-center flex-col gap-8 p-10 "
      >
        <h1>Lending App</h1>
        <Input placeholder="Email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
        <Button type="submit" label="Login with Keycloak" className="w-full" />
      </Form>
    </div>
  );
};

export default Login;
