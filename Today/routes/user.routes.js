import express from "express";
const router = express.Router();

import {
  createuser,
  readuser,
  deleteuser,
  updateuser,
} from "../controller/user.controller.js";

router.post("/create", createuser);
router.get("/read", readuser);
router.delete("/delete/:id", deleteuser);
router.put("/update/:id", updateuser);

export default router;
