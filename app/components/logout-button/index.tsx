import { Form } from "@remix-run/react";
import useActionState from "~/hooks/useActionState";
import Loading from "../ui/Loading";

export default function LogoutButton() {
  const { isLoading, setIsLoading } = useActionState();
  return (
    <Form method="post" className="flex">
      <input type="hidden" name="actionType" value="logout" />
      <div className="relative rounded-badge overflow-hidden">
        {isLoading && (
          <div className="h-full w-full bg-base-300/30 absolute z-50" />
        )}
        <button
          onClick={() => setIsLoading(true)}
          type="submit"
          className="btn btn-primary w-full rounded-badge"
        >
          {isLoading ? <Loading /> : "Logout"}
        </button>
      </div>
    </Form>
  );
}
