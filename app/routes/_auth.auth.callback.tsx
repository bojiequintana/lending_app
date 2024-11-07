import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/utils/auth/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return authenticator.authenticate("keycloak", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
}
