import { createClient } from "@supabase/supabase-js";
import { IAuthBaseOperations } from "./types/_IAuthBaseOperation";
import { json, redirect } from "@remix-run/node";
import { sessionCookieSerialize } from "../_httpOnlyCookie";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const keycloakAuth = (): IAuthBaseOperations => {
  return {
    signIn: async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "keycloak",
        options: {
          redirectTo:
            "https://emcmfiljocyflxbogrdx.supabase.co/auth/v1/callback",
        },
      });
      console.log("🚀 ~ signIn: ~ data:", data);
      if (data.url) {
        return redirect(data.url);
      }
      return json({ error }, { status: 401 });
    },
    signUp: async () => {
      return json({});
    },
    signOut: async () => {
      await supabase.auth.signOut();
      const serializeResult = await sessionCookieSerialize();
      return redirect("/", { headers: { "Set-Cookie": serializeResult } });
    },
  };
};
