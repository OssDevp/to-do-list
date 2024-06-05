
export default function Task({ task }) {
  return (
    <div className="bg-slate-800 shadow-md border-2 border-gray-500 rounded p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold text-white">
          {task.name}
        </h3>
        <p className="text-gray-500">
          {task.description}
        </p>
      </div>
      <div className="flex flex-col gap-5 space-x-2 items-center">
        <button
          className="form-checkbox h-5 w-5  text-green-600"
        >
          Hecho
        </button>
        <div className="flex flex-row justify-center items-center gap-2">
          <button className="w-full px-4 py-2 bg-gray-600 text-white rounded focus:outline-none hover:bg-gray-700 border-2 border-gray-300">
            Edit
          </button>
          <button className="w-full px-4 py-2 bg-gray-900 text-white rounded focus:outline-none hover:bg-gray-950 border-2 border-gray-300">
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}
