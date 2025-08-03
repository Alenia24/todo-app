import mongoose from "mongoose"
import { config } from "dotenv"
config();

// Connect to mongoDB using mongoose
mongoose.connect(process.env.MONGO_URI)

// Verify the connection is established and display the database name
mongoose.connection.once("open", async () => {
    console.log(`Mongoose connected: ${mongoose.connection.name}`);
})