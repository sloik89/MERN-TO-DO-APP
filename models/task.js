const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the value"],
    trim: true,
    maxlength: [20, "name is to long"],
    minlength: [6, "name is to short"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Task", TaskSchema);
