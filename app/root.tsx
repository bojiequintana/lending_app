import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";

import "./tailwind.css";
import Authentication from "./components/authentication";
import PrivateLayout from "./components/private-layout";
import { sessionCookie } from "./auth/_httpOnlyCookie";
import auth from "./auth";

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
  const { login, logout } = await auth();
  const actionType = body.get("actionType") as string;
  if (actionType === "login") return login(body);
  if (actionType === "logout") return logout(body);
  // If actionType is not recognized
  return new Response("Action not supported", { status: 400 });
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = await sessionCookie.parse(cookieHeader);
  if (!token) {
    return { isAuthenticated: false };
  }
  return { isAuthenticated: true, token };
};

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="cupcake">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="prose">
        <Authentication>
          <PrivateLayout>{children}</PrivateLayout>
        </Authentication>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
