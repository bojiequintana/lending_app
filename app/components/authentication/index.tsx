import { Form } from "@remix-run/react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import google from "public/google.png";

const Authentication = () => {
  return (
    <Form
      method="post"
      className="flex flex-col gap-10 max-w-md w-full bg-base-200 p-10 rounded-box items-center shadow-md"
    >
      <h1>Lending App</h1>
      <Input placeholder="Email" name="email" />
      <Input placeholder="Password" name="password" type="password" />
      <div className="flex gap-3">
        <Button type="submit" label="Login" />
        <Button type="button" variant="base100" className="relative px-8">
          <img src={google} alt="googleLogo" className="w-6 absolute" />
        </Button>
      </div>
    </Form>
  );
};

export default Authentication;
