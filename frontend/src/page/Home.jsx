import Header from "../components/Header"
import Task from "../components/Task"
import TaskModal from "../components/TaskModal"
import useAuth from "../hook/useAuth";
export default function Home() {

  const { modal, tasks } = useAuth();

  return (
    <>
      <Header
      />
      <div className="h-[100vh] bg-slate-700">
        <div className="pt-5 container m-auto">
          <h2 className="text-2xl text-white text-center font-bold mb-5">Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {tasks.map((task) => (
              <Task
                key={task._id}
                task={task}
              />
            ))}

          </div>
        </div>
      </div>
      {modal ? <TaskModal /> : ''}
    </>
  )
}
