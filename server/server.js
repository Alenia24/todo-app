import express from "express"
const app = express()

const PORT = 3000;

// Import the databse connection
import "./config/db.js"

app.get("/", (req, res) => {
    res.send("Welcome to todo app API.")
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})