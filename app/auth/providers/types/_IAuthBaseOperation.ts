export interface IAuthParams {
  email: string;
  password: string;
}

export interface IAuthBaseOperations<T> {
  signUp: (params: IAuthParams) => Promise<T>;
  signIn: (params: IAuthParams) => Promise<T>;
  signOut: () => Promise<void>;
}
