import mongoose from "mongoose";

// Define Task Schema
const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
      maxlength: [100, "Title must be under 100 characters."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      trim: true,
      maxlength: [500, "Description must be under 500 characters."],
    },
    dueDate: {
      type: Date,
      required: [true, "Due Date is required."],
      validate: {
        validator: function (value) {
            // Ensure the date is today or in the future
            const today = new Date();
            today.setHours(0,0,0);
            return value >= today;
        },
        message: "Due date cannot be in the past."
      }
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
