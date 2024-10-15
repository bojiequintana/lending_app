import {
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Authentication from "./components/authentication";
import PrivateLayout from "./components/PrivateLayout";
import { supabaseAuth } from "./auth/supabaseAuth";

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

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const email = body.get("email") as string;
  const password = body.get("password") as string;
  supabaseAuth().signIn({ email, password });
  return redirect(`/`);
}

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isAuthenticated = false;
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
