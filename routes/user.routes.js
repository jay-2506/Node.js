import express from "express";
const userrouter = express.Router();
import {
  createuser,
  readuser,
  findById,
  updateuser,
  deleteuser,
} from "../controller/user.controller.js";
userrouter.post("/create", createuser);
userrouter.get("/read", readuser);
userrouter.get("/:id", findById);
userrouter.put("/update/:id", updateuser);
userrouter.delete("/delete/:id", deleteuser);

export default userrouter;
