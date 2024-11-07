import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import PrivateLayout from "~/components/private-layout";
import {
  authenticator,
  isTokenExpired,
  validateToken,
} from "~/utils/auth/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Lending App" },
    { name: "description", content: "Welcome to lending app" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const authResponse = await authenticator.isAuthenticated(request);
  if (!authResponse) {
    return redirect("/login");
  }
  const userAccessToken = await validateToken(authResponse?.accessToken);
  console.log("🚀 ~ loader ~ userAccessToken:", userAccessToken);
  const isAccessTokenExpired = isTokenExpired(userAccessToken.exp as number);
  if (isAccessTokenExpired) {
    const userRefreshToken = await validateToken(
      authResponse?.refreshToken as string
    );
    const isRefreshTokenExpired = isTokenExpired(
      userRefreshToken.exp as number
    );
    if (isRefreshTokenExpired) {
      return redirect("/logout");
    }
  }
  return userAccessToken;
}

const Private = () => {
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default Private;
