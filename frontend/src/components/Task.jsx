
export default function Task() {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">
          Task Name
        </h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex space-x-2 items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-green-600"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none">
          Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded focus:outline-none">
          Delete
        </button>
      </div>
    </div>
  );
}
