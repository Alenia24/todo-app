import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      min: [3, "Name must be at least 3 characters"]
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        message: "Invalid email address."
      }
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      min: [6, "Password must be at least 6 characters."],
    },
  },
  { timestamps: true }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
  // Skip hashing if the password hasn't changed
  if (!this.isModified("password")) return next();
  // Hash only when the password is new or updated
  // Hash the password 10 times
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
