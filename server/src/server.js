const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// create express app
const app = express();

// middleware
// cors allows the react fronted to sed requests to this backend
app.use(cors());

//express .json() allows the server to read JSON reuest body
app.use(express.json());

//Test route
// This is used to check whether the backend is running correctly
app.get("/api/health", (req, res) => {
    res.json({
        message: "Student Manager API is running",
        status: "OK",
    });
});

// Get port from .env or use 5000 by default
const PORT = process.env.port || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});