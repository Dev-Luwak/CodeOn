import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDB() {
  if (!env.MONGO_URI) {
    console.error("MONGO_URI missing in .env");
    process.exit(1);
  }
  await mongoose.connect(env.MONGO_URI);
  console.log("✓ MongoDB connected");
}
