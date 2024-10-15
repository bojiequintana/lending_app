import { createClient } from "@supabase/supabase-js";
import { IAuth, IAuthBaseOperations } from "./IAuthBaseOperation";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseAuth = (): IAuthBaseOperations => {
  const signUp = (params: IAuth) => {
    supabase.auth.signUp({
      email: params.email,
      password: params.password,
    });
  };
  const signIn = (params: IAuth) => {
    supabase.auth.signUp({
      email: params.email,
      password: params.password,
    });
  };
  const signOut = () => {
    supabase.auth.signOut();
  };

  return {
    signIn,
    signOut,
    signUp,
  };
};
