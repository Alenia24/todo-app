import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const authenticateToken = (req, res, next) => {
  // Get the Authorization header from the request
  const authHeader = req.headers["authorization"];
  // Get the Token from the header
  const token = authHeader && authHeader.split(" ")[1];

  // If no token is found
  if(!token) {
    return res.status(401).json({ message: "Access denied." })
  }

  try {
    const secret = process.env.JWT_SECRET;
    const user =  jwt.verify(token, secret)

    // Attach user payload
    req.user = user;
    // Call the next middleware
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token." })
  }
};

export default authenticateToken;
