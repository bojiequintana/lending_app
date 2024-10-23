export interface IDataResponseAction {
  session: {
    access_token: string;
    refresh_token: string;
    expires_at: number | undefined;
    user: {
      uid: string;
      email: string;
    };
  };
  error: unknown;
}
export interface IAuthParams {
  email: string;
  password: string;
}
export interface IAuthBaseOperations {
  signUp: (params: IAuthParams) => Promise<Response>;
  signIn: (params: IAuthParams) => Promise<Response>;
  signOut: () => Promise<Response>;
}
