import { createCookie } from "@remix-run/node"; // or "@remix-run/server-runtime"

// Define the cookie with httpOnly and secure options
export const sessionCookie = createCookie("session", {
  httpOnly: true, // Prevents JavaScript access to the cookie
  secure: process.env.NODE_ENV === "production", // Secure in production
  sameSite: "lax", // Helps prevent CSRF attacks
  path: "/", // Cookie is available throughout the app
  maxAge: 60 * 60 * 24 * 7, // 1 week
});
