import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: Boolean,
    default: false
  },
})

const Task = mongoose.model("Task", taskSchema);
export default Task;