import { json, redirect } from "@remix-run/node";
import { sessionCookie } from "./_httpOnlyCookie";
import providers from "./providers";
import { loginValidations, signUpValidations } from "./_validations";

interface IDataResponseAction {
  session: {
    access_token: string;
  };
}

export default async function auth(): Promise<{
  login: (body: FormData) => Promise<Response>;
  signUp: (body: FormData) => Promise<Response>;
  logout: (body: FormData) => Promise<Response>;
}> {
  const authProvider = await providers<{
    data: IDataResponseAction;
    error: unknown;
  }>();

  const login = async (body: FormData): Promise<Response> => {
    const email = body.get("email") as string;
    const password = body.get("password") as string;

    const { errorCount, fieldErrors } = loginValidations(body);
    if (errorCount) {
      return json({ fieldErrors, status: 400 }, { status: 400 });
    }

    const { data } = await authProvider.signIn({ email, password });
    if (data.session && data.session.access_token) {
      const result = await sessionCookie.serialize(data.session.access_token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // expires in 7 days
      });
      return redirect("/", { headers: { "Set-Cookie": result } });
    }
    return json(
      { error: "Authentication failed", status: 401 },
      { status: 401 }
    );
  };

  const signUp = async (body: FormData): Promise<Response> => {
    const email = body.get("email") as string;
    const password = body.get("password") as string;

    const { errorCount, fieldErrors } = signUpValidations(body);
    if (errorCount) {
      return json({ fieldErrors, status: 400 }, { status: 400 });
    }

    const { data } = await authProvider.signUp({ email, password });
    if (data) {
      return redirect("/users");
    }
    return json(
      { error: "Authentication failed", status: 401 },
      { status: 401 }
    );
  };

  const logout = async (): Promise<Response> => {
    await authProvider.signOut();
    const cookie = await sessionCookie.serialize("", {
      expires: new Date(0),
    });
    return redirect("/", { headers: { "Set-Cookie": cookie } });
  };
  return { login, signUp, logout };
}
