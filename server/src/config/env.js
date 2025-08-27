import dotenv from "dotenv";
dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URI || "",
  JWT_SECRET: process.env.JWT_SECRET || "dev-secret-change-me",
  COOKIE_NAME: process.env.COOKIE_NAME || "codeon_token",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",

  // OAuth (you will fill these in Google Cloud Console)
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
  OAUTH_GOOGLE_CALLBACK_URL: process.env.OAUTH_GOOGLE_CALLBACK_URL || "http://localhost:4000/api/auth/google/callback",
};
