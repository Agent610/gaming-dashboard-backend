import express from "express";
import {
  createComment,
  getComments,
} from "../controllers/commentController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:postId", protect, createComment);

router.get("/:postId", getComments);

export default router;
