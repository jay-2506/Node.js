import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());

// database

connectDB();

const port = process.env.PORT;
const db = process.env.MONGO_URL;

// routes
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
