import Header from "../components/Header"
import Task from "../components/Task"
export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[100vh] bg-slate-700">
        <div className="pt-5 container m-auto">
          <h2 className="text-2xl text-white text-center font-bold mb-5">Tasks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </div>
    </>
  )
}
