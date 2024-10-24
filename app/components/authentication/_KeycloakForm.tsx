import { Form, useLoaderData } from "@remix-run/react";
import Button from "../ui/Button";
import google from "public/google.png";
import { loader } from "~/root";

const KeycloakForm = () => {
  const data = useLoaderData<typeof loader>();
  console.log("🚀 ~ KeycloakForm ~ data:", data);
  return (
    <Form method="post" className="w-full">
      <input type="hidden" name="actionType" value="keycloakLogin" />{" "}
      <Button type="submit" variant="base100" className="relative px-8 w-full">
        <img src={google} alt="googleLogo" className="w-6 absolute" />
      </Button>
    </Form>
  );
};

export default KeycloakForm;
