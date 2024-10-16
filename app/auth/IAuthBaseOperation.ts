export interface IAuth {
  email: string;
  password: string;
}
export interface IAuthBaseOperations<T> {
  signUp: (params: IAuth) => Promise<T>;
  signIn: (params: IAuth) => Promise<T>;
  signOut: () => void;
}
