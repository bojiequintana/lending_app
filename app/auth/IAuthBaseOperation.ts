export interface IAuth {
  email: string;
  password: string;
}
export interface IAuthBaseOperations {
  signUp: (params: IAuth) => void;
  signIn: (params: IAuth) => void;
  signOut: () => void;
}
