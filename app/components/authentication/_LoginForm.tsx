import { Form } from "@remix-run/react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import google from "public/google.png";
import useActionState from "~/hooks/useActionState";
import { displayErrorMessagesByErrorState } from "~/utils/displayErrorMessagesByErrorState";
import Loading from "../ui/Loading";
import Alert from "../ui/Alert";

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
      className="flex flex-col gap-10 max-w-md w-full bg-base-200 p-10 rounded-box items-center shadow-md"
    >
      {/** input hidden: important for form identity*/}
      <input type="hidden" name="actionType" value="login" />{" "}
      <h1>Lending App</h1>
      <Input
        placeholder="Email"
        name="email"
        variant={fields.email ? "error" : "default"}
        errormessage={fields.email}
        onChange={() => turnOffErrorIndicator("email")}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        variant={fields.password ? "error" : "default"}
        errormessage={fields.password}
        onChange={() => turnOffErrorIndicator("password")}
      />
      {actionData?.error && <Alert>Unauthorized user!</Alert>}
      <div className="flex gap-3">
        <Button onClick={() => setIsLoading(true)} type="submit">
          {isLoading ? <Loading /> : "Login"}
        </Button>
        <Button type="button" variant="base100" className="relative px-8">
          <img src={google} alt="googleLogo" className="w-6 absolute" />
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
