import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
