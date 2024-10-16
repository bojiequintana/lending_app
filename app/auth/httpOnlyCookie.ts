import { createCookie } from "@remix-run/node"; // or "@remix-run/server-runtime"

// Define the cookie with httpOnly and secure options
export const sessionCookie = createCookie("session", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // secure only in production
  sameSite: "lax", // prevent CSRF attacks
  path: "/",
});
