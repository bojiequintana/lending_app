import { IAuthBaseOperations } from "./types/_IAuthBaseOperation";
import { supabaseEmailAuth } from "./_supabaseEmailAuth";
import { keycloakAuth } from "./_keyCloakAuth";

export default async function providers(
  providerName: "keycloak" | "supabase" = "supabase"
): Promise<IAuthBaseOperations> {
  if (providerName === "keycloak") return keycloakAuth();
  return supabaseEmailAuth();
}
