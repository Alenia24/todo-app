import express from "express";
const router = express.Router();

// // Import auth controller
import * as AuthController from "../../controllers/auth/auth-controller.js";

// Create a user
router.post("/register", AuthController.registerUser);

// Login a user
router.post("/login", AuthController.loginUser);

export default router;
