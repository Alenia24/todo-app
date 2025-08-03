import express from "express";
import authenticateToken from "../../middleware/auth-middleware";
const router = express.Router();

// Import task controller

// Protect all routes
router.use(authenticateToken)

// Create a task
router.post("/",)

// Get all tasks
router.get("/",)

// Get a task by id
router.get("/:id",)

// Update a task
router.post("/:id",)

// Delete a task
router.delete("/:id",)

export default router;
