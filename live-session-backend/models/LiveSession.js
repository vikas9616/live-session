const mongoose = require("mongoose");

const liveSessionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  unique_id: { type: String, required: true },
  userurl: { type: String, required: true }
});

module.exports = mongoose.model("LiveSession", liveSessionSchema);
