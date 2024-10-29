import KeycloakForm from "./_KeycloakForm";
import GoogleForm from "./_GoogleForm";

interface IProps {
  onSubmit: () => void;
}
const LoginForm = (props: IProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-md w-full sm:bg-base-300/40 p-10 rounded-box items-center sm:shadow-md">
      <h1>Lending App</h1>

      <KeycloakForm />
      <GoogleForm onClick={props.onSubmit} />
    </div>
  );
};

export default LoginForm;
