const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const sessionRoutes = require("./routes/sessionRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/live_sessions")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/session", sessionRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
