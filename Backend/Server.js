const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 
const authRouter = require("./routes/authentication");
const dbRouter= require("./routes/dbRouter");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/E-commerce");

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection established");
});

app.use("/register",dbRouter);
app.use("/api/auth",authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
