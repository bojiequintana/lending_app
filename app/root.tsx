import {
  json,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useActionData,
  useLoaderData,
} from "@remix-run/react";
import type {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";

import "./tailwind.css";
import Authentication from "./components/authentication";
import PrivateLayout from "./components/PrivateLayout";
import { supabaseAuth } from "./auth/supabaseAuth";
import { useEffect } from "react";
import { sessionCookie } from "./auth/httpOnlyCookie";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];
interface IDataResponseAction {
  session: {
    access_token: string;
  };
}
export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const email = body.get("email") as string;
  const password = body.get("password") as string;
  const { data } = await supabaseAuth<{
    data: IDataResponseAction;
    error: unknown;
  }>().signIn({ email, password });
  // Example: saving a token in the cookie
  if (data.session.access_token) {
    const result = await sessionCookie.serialize(data.session.access_token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // expires in 7 days
    });
    console.log("🚀 ~ action ~ result:", result);
  }

  return redirect("/");
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  console.log("🚀 ~ loader ~ cookieHeader:", cookieHeader);
  const token = await sessionCookie.parse(cookieHeader);

  // if (!token) {
  //   throw new Response("Unauthorized", { status: 401 });
  // }
  return json(token);
  // Continue with authenticated request
};

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data = useLoaderData();
  const isAuthenticated = true;
  const renderElement = isAuthenticated ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <div className="w-screen h-dvh flex justify-center items-center">
      <Authentication />
    </div>
  );

  return (
    <html lang="en" data-theme="pastel">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="prose">
        {renderElement}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
