export type UserToken = {
  accessToken: string;
  refreshToken: string | undefined;
  sessionState: string | number;
};
