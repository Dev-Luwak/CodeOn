import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import healthRouter from "./routes/health.js";

const app = express();

// Security & parsers
app.use(helmet({
  contentSecurityPolicy: false, // fine for API; FE will handle CSP
}));
app.use(cors({
  origin: [env.CLIENT_URL],
  credentials: true,
}));
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

const limiter = rateLimit({ windowMs: 60_000, max: 120 });
app.use(limiter);

// Routes
app.use("/api/health", healthRouter);
// (auth, projects, paths routes will be added later)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal error" });
});

const start = async () => {
  await connectDB();
  app.listen(env.PORT, () => {
    console.log(`✓ API running http://localhost:${env.PORT}`);
  });
};

start();
