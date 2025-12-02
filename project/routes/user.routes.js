import express from "express";
import { authorizeRoles } from "../middleware/role.middleware.js";

// import { errorMiddleware} from "../middleware./error.middleware.js"
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
  authorizeRoles
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser, authorizeRoles("admin"));
router.post("/login", login);
// router.post("/register", register);

export default router;
