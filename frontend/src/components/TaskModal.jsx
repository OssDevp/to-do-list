
export default function TaskModal() {
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2
          className="text-2xl font-bold mb-4">Add New Task</h2>
        <form>
          <div
            className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Task Name
            </label>
            <input
              id="taskName"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter task name"
            />
          </div>
          <div
            className="mb-4"
          >
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Task Description
            </label>
            <textarea
              id="taskDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter task description"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
