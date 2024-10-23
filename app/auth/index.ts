import { json } from "@remix-run/node";
import providers from "./providers";
import { loginValidations, signUpValidations } from "./_validations";

export default async function auth(): Promise<{
  login: (body: FormData) => Promise<Response>;
  signUp: (body: FormData) => Promise<Response>;
  logout: (body: FormData) => Promise<Response>;
}> {
  const authProvider = await providers("keycloak");

  const login = async (body: FormData): Promise<Response> => {
    const email = body.get("email") as string;
    const password = body.get("password") as string;
    const { errorCount, fieldErrors } = loginValidations(body);
    if (errorCount) {
      return json({ fieldErrors, status: 400 }, { status: 400 });
    }
    return authProvider.signIn({ email, password });
  };

  const signUp = async (body: FormData): Promise<Response> => {
    const email = body.get("email") as string;
    const password = body.get("password") as string;
    const { errorCount, fieldErrors } = signUpValidations(body);
    if (errorCount) {
      return json({ fieldErrors, status: 400 }, { status: 400 });
    }
    return await authProvider.signUp({ email, password });
  };

  const logout = async (): Promise<Response> => {
    return await authProvider.signOut();
  };

  return { login, signUp, logout };
}
