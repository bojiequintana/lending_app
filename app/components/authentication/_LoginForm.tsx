import { Form } from "@remix-run/react";
import Button from "../ui/Button";
import google from "public/google.png";
import useActionState from "~/hooks/useActionState";
import { displayErrorMessagesByErrorState } from "~/utils/displayErrorMessagesByErrorState";
import Loading from "../ui/Loading";
import Alert from "../ui/Alert";
import InputIcon from "../ui/InputIcon";
import Icon from "../ui/Icon";

const LoginForm = () => {
  const {
    actionData,
    isLoading,
    setIsLoading,
    fieldErrorsState,
    turnOffErrorIndicator,
  } = useActionState();

  const fields = displayErrorMessagesByErrorState({
    fieldErrors: actionData?.fieldErrors,
    fieldErrorsState,
  });
  return (
    <Form
      method="post"
      className="flex flex-col gap-10 max-w-md w-full sm:bg-base-300/40 p-10 rounded-box items-center sm:shadow-md"
    >
      {/** input hidden: important for form identity*/}
      <input type="hidden" name="actionType" value="login" />{" "}
      <h1>Lending App</h1>
      <InputIcon
        placeholder="Email"
        name="email"
        variant={fields.email ? "error" : "default"}
        errormessage={fields.email}
        onChange={() => turnOffErrorIndicator("email")}
        icon={<Icon name="email" />}
        className="bg-base-300 sm:bg-base-100"
      />
      <InputIcon
        placeholder="Password"
        name="password"
        type="password"
        variant={fields.password ? "error" : "default"}
        errormessage={fields.password}
        onChange={() => turnOffErrorIndicator("password")}
        icon={<Icon name="password" />}
        className="bg-base-300 sm:bg-base-100"
      />
      <div className="flex gap-3">
        <div className="relative rounded-badge overflow-hidden">
          {isLoading && (
            <div className="h-full w-full bg-base-300/30 absolute z-50" />
          )}
          <Button onClick={() => setIsLoading(true)} type="submit">
            {isLoading ? <Loading /> : "Login"}
          </Button>
        </div>
        <Button type="button" variant="base100" className="relative px-8">
          <img src={google} alt="googleLogo" className="w-6 absolute" />
        </Button>
      </div>
      {actionData?.error && <Alert>Unauthorized user!</Alert>}
    </Form>
  );
};

export default LoginForm;
