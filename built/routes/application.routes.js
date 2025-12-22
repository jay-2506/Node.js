import express from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  createApplication,
  getApplications,
  updateStatus,
} from "../controller/application.controller.js";

const router =express.Router();

// Apply auth middleware to all routes
router.use(auth);

// Application routes
router.post("/", createApplication);
router.get("/", getApplications);
router.patch("/:id", updateStatus);

export default router;
