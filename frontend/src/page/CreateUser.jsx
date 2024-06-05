import { Link } from "react-router-dom"
export default function CreateUser() {
  return (
    <div className="bg-slate-700 flex items-center justify-center min-h-screen">
      <div className="bg-slate-800 p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Create User</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username" />
          </div>
          <div
            className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="password"
            >Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div
            className="mb-6">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="password"
            >Repeat Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="passwordRepeat"
              type="password"
              placeholder="Reapet Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
              Sign In
            </button>
          </div>
          <Link
            to={"/"}
            className="block text-gray-200 text-sm font-bold mb-2 text-center mt-5 hover:text-gray-400"
          >Login</Link>
        </form>
      </div>
    </div>
  )
}
