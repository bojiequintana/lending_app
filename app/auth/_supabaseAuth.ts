import { createClient } from "@supabase/supabase-js";
import { IAuthParams, IAuthBaseOperations } from "./_IAuthBaseOperation";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseAuth = <T>(): IAuthBaseOperations<T> => {
  const signUp = async (params: IAuthParams): Promise<T> => {
    const result = (await supabase.auth.signUp({
      email: params.email,
      password: params.password,
    })) as T;
    console.log("🚀 ~ signUp ~ result:", result);
    return result;
  };

  const signIn = async (params: IAuthParams): Promise<T> => {
    return (await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.password,
    })) as T;
  };
  const signOut = async (): Promise<void> => {
    await supabase.auth.signOut();
  };

  return {
    signIn,
    signOut,
    signUp,
  };
};
