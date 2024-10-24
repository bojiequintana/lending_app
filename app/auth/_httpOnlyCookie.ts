import { createCookie } from "@remix-run/node"; // or "@remix-run/server-runtime"
import { fromUnixTime, isBefore } from "date-fns";

// Define the cookie with httpOnly and secure options
const sessionCookie = createCookie("session", {
  httpOnly: true, // Prevents JavaScript access to the cookie
  secure: process.env.NODE_ENV === "production", // Secure in production
  sameSite: "lax", // Helps prevent CSRF attacks
  path: "/", // Cookie is available throughout the app
  maxAge: 30 * 60, // 30minutes
});

export const sessionCookieSerialize = async (data?: unknown) => {
  if (!data) {
    return await sessionCookie.serialize("", {
      expires: new Date(0),
    });
  }
  return await sessionCookie.serialize(data, {
    expires: new Date(Date.now() + 30 * 30), // 30minutes
  });
};

export const verifySessionCookie = async (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  const parseInfo = await sessionCookie.parse(cookieHeader);
  console.log("🚀 ~ verifySessionCookie ~ parseInfo:", parseInfo);
  if (!parseInfo) return null;
  return {
    accessToken: parseInfo.access_token,
    refreshToken: parseInfo.refresh_token,
    isExpired: isTokenExpired(parseInfo.expires_at),
    uid: parseInfo.user.uid,
    email: parseInfo.user.email,
    isAuthenticated: parseInfo.access_token,
  };
};

export const isTokenExpired = (expires_at: number) => {
  const currentTime = new Date();
  const expiryDate = fromUnixTime(expires_at);
  return isBefore(expiryDate, currentTime);
};
