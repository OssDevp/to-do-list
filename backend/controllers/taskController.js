import Task from "../model/Task.js";

const getAllTask = async (req, res) => {
  //todo get all tasks
  const allTask = await Task.find({});

  try {
    res.json(allTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  //todo get a task

  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  try {
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const postTask = async (req, res) => {
  //todo create a new task
  const { name, description } = req.body;
  if (name === '' || description === '') return res.status(400).json({ message: "All fields are required" });

  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const putTask = async (req, res) => {
  //todo update a task
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task)
    return res.status(404).json({ message: "Task not found" });

  task.name = req.body.name || task.name;
  task.description = req.body.description || task.description;
  task.status = req.body.status || task.status;
  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteTask = async (req, res) => {
  //todo delete a task
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  try {
    await task.deleteOne();
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export {
  getTask,
  postTask,
  putTask,
  deleteTask,
  getAllTask,
}