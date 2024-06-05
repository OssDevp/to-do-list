import useAuth from "../hook/useAuth";
export default function Header() {
  const { toggleModal } = useAuth();
  return (
    <header
      className="bg-slate-800 p-8">
      <div
        className="flex flex-col items-center md:flex-row justify-between container m-auto">
        <h2
          className="text-2xl text-white font-bold mb-5 md:mb-0"
        >
          To Do List
        </h2>
        <div
          className="flex flex-col items-center md:flex-row md:gap-2">
          <button
            className="text-white py-2 px-4 rounded hover:text-gray-400"
            type="button"
            onClick={toggleModal}
          >
            Create Task
          </button>
          <button
            className=" text-white py-2 px-4 rounded hover:text-gray-400"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
