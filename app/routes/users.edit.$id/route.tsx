import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Breadcrumbs from "~/components/ui/Breadcrumbs";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";
import { getUsersById } from "~/data-access/userRepository";

export async function loader({ params }: LoaderFunctionArgs) {
  const userById = await getUsersById(params.id ?? "");
  return userById;
}

const Edit = () => {
  const user = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between items-center ">
        <Breadcrumbs />
      </div>
      <div className="w-full m-auto flex justify-center">
        <div className="rounded-btn p-10 shadow-sm bg-base-100 max-w-xl w-full">
          <Form className="flex flex-col gap-10">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button label="Save" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
