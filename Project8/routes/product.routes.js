import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/product.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

import { productSchema } from "../validation/product.validation.js";

const router = express.Router();

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.json({ message: error.details[0].message });
  next();
};

router.post(
  "/",
  auth,
  authorize("admin"),
  validate(productSchema),
  createProduct
);

router.get("/product", auth, getProducts);

export default router;
