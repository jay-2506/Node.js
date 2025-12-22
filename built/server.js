import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import appRoutes from "./routes/application.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/applications", appRoutes);
app.use("/api/analytics", analyticsRoutes);
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
