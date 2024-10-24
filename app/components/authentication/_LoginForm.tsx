import { Form } from "@remix-run/react";
import Button from "../ui/Button";
import google from "public/google.png";
import useActionState from "~/hooks/useActionState";
import Loading from "../ui/Loading";
import Alert from "../ui/Alert";
import InputIcon from "../ui/InputIcon";
import Icon from "../ui/Icon";
import KeycloakForm from "./_KeycloakForm";

interface ILoginForm {
  [key: string]: string;
  email: string;
  password: string;
}
const LoginForm = () => {
  const {
    actionData,
    isLoading,
    setIsLoading,
    fieldErrorMessages,
    turnOffErrorIndicator,
  } = useActionState<ILoginForm>();

  return (
    <div className="flex flex-col gap-5 max-w-md w-full sm:bg-base-300/40 p-10 rounded-box items-center sm:shadow-md">
      <h1>Lending App</h1>
      <Form method="post" className="flex flex-col gap-10 max-w-md w-full ">
        {/** input hidden: important for form identity*/}
        <input type="hidden" name="actionType" value="login" />{" "}
        <InputIcon
          placeholder="Email"
          name="email"
          variant={fieldErrorMessages.email ? "error" : "default"}
          errormessage={fieldErrorMessages.email}
          onChange={() => turnOffErrorIndicator("email")}
          icon={<Icon name="email" />}
          className="bg-base-300 sm:bg-base-100"
        />
        <InputIcon
          placeholder="Password"
          name="password"
          type="password"
          variant={fieldErrorMessages.password ? "error" : "default"}
          errormessage={fieldErrorMessages.password}
          onChange={() => turnOffErrorIndicator("password")}
          icon={<Icon name="password" />}
          className="bg-base-300 sm:bg-base-100"
        />
        <div className="flex gap-3 w-full">
          <div className="relative rounded-badge overflow-hidden w-full">
            {isLoading && (
              <div className="h-full w-full bg-base-300/30 absolute z-50" />
            )}
            <Button
              onClick={() => setIsLoading(true)}
              type="submit"
              className="w-full"
            >
              {isLoading ? <Loading /> : "Login"}
            </Button>
          </div>
        </div>
        {actionData?.error && <Alert>{actionData?.error ?? ""}</Alert>}
      </Form>
      <KeycloakForm />
    </div>
  );
};

export default LoginForm;
