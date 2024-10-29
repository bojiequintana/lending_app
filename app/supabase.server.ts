import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr";

interface RequestType {
  request: Request;
}
export const getSupabaseEnv = () => ({
  SUPABASE_URL: process.env.SUPABASE_URL!,
  SUPABASE_KEY: process.env.SUPABASE_KEY!,
  DOMAIN_URL: process.env.DOMAIN_URL!,
});

export function getSupabaseWithHeaders({ request }: RequestType) {
  const cookies = parseCookieHeader(request.headers.get("Cookie") ?? "");
  const headers = new Headers();

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    {
      cookies: {
        getAll() {
          // Return all cookies as an object
          return cookies;
        },
        setAll(cookiesToSet) {
          // Set all cookies at once
          cookiesToSet.forEach(({ name, value, options }) => {
            headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, {
                ...options,
                httpOnly: true, // Makes cookie inaccessible via JavaScript
                secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
                sameSite: "lax", // Prevents CSRF, but allows same-site requests
              })
            );
          });
        },
      },
    }
  );
  return { supabase, headers };
}

export async function getSupabaseWithSessionAndHeaders({
  request,
}: RequestType) {
  const { supabase, headers } = getSupabaseWithHeaders({
    request,
  });
  const {
    data: { session: serverSession },
  } = await supabase.auth.getSession();
  return { serverSession, headers, supabase };
}
