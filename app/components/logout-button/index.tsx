import { Form } from "@remix-run/react";

export default function LogoutButton() {
  return (
    <Form method="post" className="w-full flex">
      <input type="hidden" name="actionType" value="logout" />
      <button type="submit" className="btn btn-primary w-full rounded-badge">
        Logout
      </button>
    </Form>
  );
}
