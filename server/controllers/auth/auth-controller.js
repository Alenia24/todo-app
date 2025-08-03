import User from "../../models/user/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

// Register a new user
async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Create a user
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({ message: "Registered Successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function loginUser(req, res) {
  try {

    const { email, password } = req.body;

    if(!email || !password) {
      return res.status(400).json({ message: "Please provide email and password." });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    // If no user is found
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Compare the password to password used at sign up
    const isMatch = await bcrypt.compare(password, user.password);
    // If the password does not match
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Sign in with JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { registerUser, loginUser };
