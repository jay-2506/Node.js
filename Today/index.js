import express from "express";
import dotenv from "dotenv";
import connetToDb from "./config/db.js";
import router from "./routes/user.routes.js";
dotenv.config();
connetToDb();
const app = express();
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT;
app.use("/health", async (req, res) => {
  res.send("Jay From Dehgam");
});
app.listen(PORT, () => {
  console.log(` Server run succesfully on port ${PORT}`);
});
