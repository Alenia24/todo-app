import express from "express";
import authenticateToken from "../../middleware/auth-middleware.js";
const router = express.Router();

// Import task controller
import * as TaskController from "../../controllers/task/task-controller.js"

// Protect all routes
router.use(authenticateToken)

// Create a task
router.post("/", TaskController.createTask)

// Get all tasks
router.get("/", TaskController.getTasks)

// Get a task by id
router.get("/:id", TaskController.getTask)

// Update a task
router.post("/:id", TaskController.updateTask)

// Delete a task
router.delete("/:id", TaskController.deleteTask)

export default router;
