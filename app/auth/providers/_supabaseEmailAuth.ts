import {
  AuthApiError,
  AuthResponse,
  createClient,
} from "@supabase/supabase-js";
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

export const supabaseEmailAuth = (): IAuthBaseOperations => {
  return {
    signIn: async (params) => {
      if (!params) {
        return json({ error: "No parameters" }, { status: 401 });
      }
      const authResponse = await supabase.auth.signInWithPassword({
        email: params.email,
        password: params.password,
      });

      const { session, error } = createBaseOperationResponse(authResponse);
      if (error) {
        const err = error as AuthApiError;
        return json(
          { error: err.message, status: err.status, code: err.code },
          { status: err.status }
        );
      }

      if (session?.access_token) {
        const serializeResult = await sessionCookieSerialize(session);
        return redirect("/", { headers: { "Set-Cookie": serializeResult } });
      }

      return json(
        { error: "Ooops something went wrong", status: 401 },
        { status: 401 }
      );
    },
    signUp: async (params) => {
      if (!params) {
        return json({ error: "No parameters" }, { status: 401 });
      }
      const authResponse = await supabase.auth.signUp({
        email: params.email,
        password: params.password,
      });

      if (authResponse.error) {
        const err = authResponse.error as AuthApiError;
        return json(
          { error: err.message, status: err.status, code: err.code },
          { status: err.status }
        );
      }

      if (authResponse) {
        return redirect("/users");
      }
      return json(
        { error: "Authentication failed", status: 401 },
        { status: 401 }
      );
    },
    signOut: async () => {
      await supabase.auth.signOut();
      const serializeResult = await sessionCookieSerialize();
      return redirect("/", { headers: { "Set-Cookie": serializeResult } });
    },
  };
};
