import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { signUp } from "~/auth";
import Alert from "~/components/ui/Alert";
import Breadcrumbs from "~/components/ui/Breadcrumbs";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";
import Loading from "~/components/ui/Loading";
import Select from "~/components/ui/Select";
import { createRoleDTO, getRoles } from "~/data-access/roleRepository";
import useActionState from "~/hooks/useActionState";

export async function loader() {
  const roles = await getRoles();
  return createRoleDTO(roles);
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  return await signUp(body);
}

interface IUserForm {
  [key: string]: string;
  email: string;
  password: string;
}

const Add = () => {
  const roles = useLoaderData<typeof loader>();
  const {
    actionData,
    isLoading,
    setIsLoading,
    fieldErrorMessages,
    turnOffErrorIndicator,
  } = useActionState<IUserForm>();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between items-center ">
        <Breadcrumbs />
      </div>
      <div className="w-full m-auto flex justify-center">
        <div className="rounded-btn p-10 shadow-sm bg-base-100 max-w-xl w-full">
          <h1 className="mb-16">Add user</h1>
          <Form method="post" className="flex flex-col gap-10">
            <Input
              placeholder="Email"
              type="email"
              name="email"
              variant={fieldErrorMessages.email ? "error" : "default"}
              onChange={() => turnOffErrorIndicator("email")}
              errormessage={fieldErrorMessages.email}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              variant={fieldErrorMessages.password ? "error" : "default"}
              onChange={() => turnOffErrorIndicator("password")}
              errormessage={fieldErrorMessages.password}
            />
            <Select
              name="role"
              options={roles.map((role) => ({
                label: role.name,
                value: role.id,
              }))}
            />
            <Button onClick={() => setIsLoading(true)} type="submit">
              {isLoading ? <Loading /> : "Login"}
            </Button>
          </Form>
          {actionData?.error && <Alert>Oops something went wrong!</Alert>}
        </div>
      </div>
    </div>
  );
};

export default Add;
