import { authenticator, isTokenExpired, validateToken } from "./auth.server";
import { createUserDTO, UserEntity } from "~/domain/user";

export const handleRefreshTokenExpiration = async (
  request: Request
): Promise<boolean> => {
  const userToken = await authenticator.isAuthenticated(request);
  const userRefreshToken = await validateToken(
    userToken?.refreshToken as string
  );
  return isTokenExpired(userRefreshToken.exp as number);
};

export const handleAccessTokenExpiration = async (
  request: Request
): Promise<boolean> => {
  const userToken = await authenticator.isAuthenticated(request);
  const userRefreshToken = await validateToken(
    userToken?.refreshToken as string
  );
  return isTokenExpired(userRefreshToken.exp as number);
};

const isUserAuthenticated = async (
  request: Request
): Promise<UserEntity | null> => {
  const userToken = await authenticator.isAuthenticated(request);
  if (!userToken) return null;

  const isAccessTokenExpired = await handleAccessTokenExpiration(request);
  const isRefreshTokenExpired = await handleRefreshTokenExpiration(request);
  if (isAccessTokenExpired && isRefreshTokenExpired) {
    return null;
  }
  const userInfo = await validateToken(userToken?.accessToken);
  return createUserDTO(userInfo);
};

export { isUserAuthenticated };
