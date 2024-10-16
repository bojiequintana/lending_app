import { createClient } from "@supabase/supabase-js";
import { IAuth, IAuthBaseOperations } from "./IAuthBaseOperation";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseAuth = <T>(): IAuthBaseOperations<T> => {
  const signUp = async (params: IAuth): Promise<T> => {
    return (await supabase.auth.signUp({
      email: params.email,
      password: params.password,
    })) as T;
  };

  const signIn = async (params: IAuth): Promise<T> => {
    return (await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.password,
    })) as T;
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
