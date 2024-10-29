import { Form, useLoaderData } from "@remix-run/react";
import Loading from "../../ui/Loading";
import { useSupabaseClient } from "~/hooks/useSupabaseClient";
import { loader } from "~/root";

export default function LogoutButton() {
  const { serverSession, env } = useLoaderData<typeof loader>();
  const { isLoading, logout } = useSupabaseClient({ serverSession, env });
  return (
    <Form method="post" className="flex">
      <input type="hidden" name="actionType" value="logout" />
      <div className="relative rounded-badge overflow-hidden">
        {isLoading && (
          <div className="h-full w-full bg-base-300/30 absolute z-50" />
        )}
        <button
          onClick={() => logout()}
          type="submit"
          className="btn btn-primary w-full rounded-badge"
        >
          {isLoading ? <Loading /> : "Logout"}
        </button>
      </div>
    </Form>
  );
}
