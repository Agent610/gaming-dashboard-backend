import express from "express";
import {
  createPost,
  getPosts,
  likePost,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", getPosts);
router.put("/:id/like", protect, likePost);

export default router;
