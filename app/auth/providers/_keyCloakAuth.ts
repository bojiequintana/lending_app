import { AuthResponse, createClient } from "@supabase/supabase-js";
import {
  IAuthBaseOperations,
  IDataResponseAction,
} from "./types/_IAuthBaseOperation";
import { json, redirect } from "@remix-run/node";
import { sessionCookieSerialize } from "../_httpOnlyCookie";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

const createBaseOperationResponse = (
  authResponse: AuthResponse
): IDataResponseAction => {
  const { data } = authResponse;
  const { session, user } = data;
  return {
    session: {
      access_token: session?.access_token ?? "",
      refresh_token: session?.refresh_token ?? "",
      expires_at: session?.expires_at,
      user: {
        uid: user?.id ?? "",
        email: user?.email ?? "",
      },
    },
    error: authResponse.error,
  };
};

export const keycloakAuth = (): IAuthBaseOperations => {
  return {
    signIn: async (params) => {
      const data = await supabase.auth.signInWithPassword({
        email: params.email,
        password: params.password,
      });
      return json(createBaseOperationResponse(data));
    },
    signUp: async (params) => {
      const data = await supabase.auth.signUp({
        email: params.email,
        password: params.password,
      });
      return json(createBaseOperationResponse(data));
    },
    signOut: async () => {
      await supabase.auth.signOut();
      const serializeResult = await sessionCookieSerialize();
      return redirect("/", { headers: { "Set-Cookie": serializeResult } });
    },
  };
};
