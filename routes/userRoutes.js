import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getUserPosts,
  updateProfile,
  getUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", protect, getUserProfile);
router.put(".profile", protect, updateProfile);
router.get("/posts", protect, getUserPosts);

export default router;
