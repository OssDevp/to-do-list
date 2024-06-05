import useAuth from "../hook/useAuth";
export default function TaskModal() {
  const { taskForm, setTaskForm, saveTasks, closeModal } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    if (taskForm.name.trim() === "" || taskForm.description.trim() === "") {
      alert("All fields are required");
      return;
    }

    saveTasks();
    closeModal();
    setTaskForm({
      name: "",
      description: "",
      status: false
    })
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
              onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
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
              onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
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
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
