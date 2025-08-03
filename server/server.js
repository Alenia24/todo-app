import express from "express";
const app = express();
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 5000;

// Import the databse connection
import "./config/db.js";

// Import routes
import authRouter from "./routes/auth/auth-route.js";
import taskRouter from "./routes/task/task-route.js";

// Enable to use req.body when forms are submitted
app.use(express.urlencoded({ extended: true }));
// Enable to use req.body without a form, eg. from req.bin, postman, etc
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to todo app API.");
});

// Enable routes to use
app.use("/api/auth", authRouter);
app.use("/api/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
