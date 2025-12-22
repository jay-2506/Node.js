import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import { stats } from "../controller/analytics.controller.js";

const router = Router();
router.get("/", auth, stats);
export default router;
