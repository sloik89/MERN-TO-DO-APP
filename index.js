const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const task = require("./routes/task");
const errorHandler = require("./middleware/errorHandler");
const notfound = require("./middleware/notfound");
// midleware
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/task", task);

// not found
app.use(notfound);
// error hanlder
app.use(errorHandler);
const port = process.env.PORT || 5000;
// db connect
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
    app.listen(port, () => {
      console.log(`server working on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
connectDB();
