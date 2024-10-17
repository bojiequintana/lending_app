import { json, redirect } from "@remix-run/node";
import { supabaseAuth } from "./_supabaseAuth";
import { sessionCookie } from "./_httpOnlyCookie";

interface IDataResponseAction {
  session: {
    access_token: string;
  };
}

export const login = async (body: FormData): Promise<Response> => {
  const email = body.get("email") as string;
  const password = body.get("password") as string;
  const { data } = await supabaseAuth<{
    data: IDataResponseAction;
    error: unknown;
  }>().signIn({ email, password });
  if (data.session.access_token) {
    const result = await sessionCookie.serialize(data.session.access_token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // expires in 7 days
    });
    return redirect("/", { headers: { "Set-Cookie": result } });
  }
  return json({ error: "Authentication failed" }, { status: 401 });
};

export const logout = async (): Promise<Response> => {
  await supabaseAuth().signOut();
  const cookie = await sessionCookie.serialize("", {
    expires: new Date(0),
  });
  return redirect("/", { headers: { "Set-Cookie": cookie } });
};
