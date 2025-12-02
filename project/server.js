import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
// import { authorizeRoles } from "./middleware/role.middleware.js";

// import { errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();
const app = express();

app.use(express.json());
// Database connection
connectDB();

// app.use(errorHandler);

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("User Management API Running");
});

app.listen(process.env.PORT, () =>
  console.log(` Server running on port ${process.env.PORT}`)
);
