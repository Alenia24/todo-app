import Task from "../../models/task/task-model";

// Create a new task
async function createTask(req, res) {
  try {
    const { title, description, dueDate, priority } = req.body;

    // Create task
    const task = await Task.create({
      userId: req.user.id,
      title,
      description,
      dueDate,
      priority,
    });

    res.status(201).json({ message: "Task created successfully.", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all tasks by logged in user
async function getTasks(req, res) {
  try {
    const filters = { userId: req.user.id };

    // Filter by status
    if (req.query.status) {
      filters.status = req.query.status;
    }
    // Filter by priority
    if (req.query.priority) {
      filters.priority = req.query.priority;
    }

    // Filter by overdue
    if (req.query.overdue === true) {
      filters.dueDate = { $lt: new Date() };
      filters.status = { $ne: "completed" };
    }

    // Add pagination
    // Number of tasks per page
    const limit = parseInt(req.query.limit) || 10;
    // Current page number
    const page = parseInt(req.query.page) || 1;
    // Calculate how many to skip
    const skip = (page - 1) * limit;

    // Get all tasks and sort by due date
    const tasks = await Task.find(filters).sort({ dueDate: 1 }).skip(skip).limit(limit);

    // If the user has no tasks
    if (tasks.length === 0) {
      return res.status(200).json({ message: "No tasks found." });
    }
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get a task by id
async function getTask(req, res) {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    // If task doesnt exist
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update a task
async function updateTask(req, res) {
  try {
    const { id } = req.params;

    // Find and update task by the current user
    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    //If task doesnt exist
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.json({ message: "Task updated successfully.", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete a task
async function deleteTask(req, res) {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    // If task doesnt exist
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.json({ message: "Task deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { createTask, getTasks, getTask, updateTask, deleteTask };
