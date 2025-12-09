import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import connectToDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
connectToDB();
app.use("/api", userRouter);
app.use("/health", async (req, res) => {
  res.send("Jay Patel's Work Space");
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
