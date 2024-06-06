import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hook/useAuth";
export default function TaskModal() {
  const { saveTasks, closeModal, task } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (task.name) {
      setName(task.name || "");
      setDescription(task.description || "");
      setStatus(task.status || false);
      setId(task._id || null);
    }
  }, [task])

  const handleSubmit = e => {
    e.preventDefault();
    if ([name, description].includes("")) {
      alert("All fields are required");
      return;
    }

    saveTasks({
      name,
      description,
      status,
      id
    });
    closeModal();

    setName("");
    setDescription("");
    setStatus(false);
    setId(null);
  }

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-slate-800 p-6 rounded shadow-md w-full max-w-md">
        <h2
          className="text-2xl font-bold mb-4 text-white">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div
            className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Task Name
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter task name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className="mb-4"
          >
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Task Description
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter task description"
              value={task.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {id ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
