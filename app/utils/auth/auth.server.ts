// app/utils/auth.server.ts
import { Authenticator } from "remix-auth";
import { KeycloakStrategy } from "remix-auth-keycloak";
import { sessionStorage } from "./session.server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "@remix-run/react";
// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
interface User {
  accessToken: string;
  refreshToken: string | undefined;
  sessionState: string | number;
}
export const authenticator = new Authenticator<User>(sessionStorage);
const keycloakStrategy = new KeycloakStrategy(
  {
    useSSL: true,
    domain: process.env.KEYCLOAK_DOMAIN!,
    realm: process.env.KEYCLOAK_REALM!,
    clientID: process.env.KEYCLOAK_CLIENT_ID!,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
    callbackURL: "/auth/callback",
  },
  async ({ accessToken, refreshToken, extraParams }) => {
    // Get the user data from your DB or API using the tokens and profile
    return {
      accessToken,
      refreshToken,
      sessionState: extraParams.session_state,
    };
  }
);

authenticator.use(keycloakStrategy);

export const validateToken = async (
  accessToken: string
): Promise<JwtPayload> => {
  return jwt.decode(accessToken) as JwtPayload;
};

export const isTokenExpired = (exp: number): boolean => {
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime >= exp;
};

export const handleAuthExpiration = async (
  authResponse: User
): Promise<Response | JwtPayload> => {
  const userAccessToken = await validateToken(authResponse?.accessToken);
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
};
