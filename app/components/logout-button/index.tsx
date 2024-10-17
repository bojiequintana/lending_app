import { Form } from "@remix-run/react";
import useActionState from "~/hooks/useActionState";
import Loading from "../ui/Loading";

export default function LogoutButton() {
  const { isLoading, setIsLoading } = useActionState();
  return (
    <Form method="post" className="w-full flex">
      <input type="hidden" name="actionType" value="logout" />
      <button
        onClick={() => setIsLoading(true)}
        type="submit"
        className="btn btn-primary w-full rounded-badge"
      >
        {isLoading ? <Loading /> : "Logout"}
      </button>
    </Form>
  );
}
