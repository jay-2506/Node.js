import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.put("/update/:id", updateUser);

export default router;
