import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from "../validation/auth.validation.js";

const router = express.Router();

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.json({ message: error.details[0].message });
  next();
};

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;
