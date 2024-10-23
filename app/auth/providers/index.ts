import { IAuthBaseOperations } from "./types/_IAuthBaseOperation";
import { supabaseAuth } from "./_supabaseAuth";

export default async function providers<T>(): Promise<IAuthBaseOperations<T>> {
  return supabaseAuth<T>();
}
