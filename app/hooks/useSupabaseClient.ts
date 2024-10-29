import { useRevalidator } from "@remix-run/react";
import { Provider, Session, SupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useState } from "react";

export type TypedSupabaseClient = SupabaseClient;

export type SupabaseOutletContext = {
  supabase: TypedSupabaseClient;
};

type SupabaseEnv = {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
  DOMAIN_URL: string;
};

type UseSupabase = {
  env: SupabaseEnv;
  serverSession: Session | null;
};

export const useSupabaseClient = ({ env, serverSession }: UseSupabase) => {
  const [isLoading, setIsLoading] = useState(false);
  const [supabase] = useState(() =>
    createBrowserClient(env.SUPABASE_URL!, env.SUPABASE_URL!)
  );

  const serverAccessToken = serverSession?.access_token;
  const revalidator = useRevalidator();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== serverAccessToken) {
        revalidator.revalidate();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth, serverAccessToken, revalidator]);

  const logout = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    setIsLoading(false);
  };

  const loginWithThirdParty = async (provider: Provider) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${env.DOMAIN_URL}/auth/callback`,
      },
    });
  };
  return { supabase, isLoading, loginWithThirdParty, logout };
};
