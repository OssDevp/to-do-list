import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/Axios";

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [taskForm, setTaskForm] = useState({
    name: "",
    description: "",
    status: false
  })

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await clientAxios.get("/task");
        setTasks(data);
      } catch (error) {
        console.log(error.massage);
      }
    }
    getTasks();
  }, [tasks])

  const saveTasks = async () => {
    try {
      await clientAxios.post("/task", taskForm);
    } catch (error) {
      console.log(error.massage);
    }
  }

  const setEdit = task => {
    setTask(task);
  }


  const toggleModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
    setTaskForm({
      name: "",
      description: "",
      status: false
    })
  }


  return (
    <TaskContext.Provider
      value={{
        saveTasks,
        setTaskForm,
        taskForm,
        modal,
        setModal,
        toggleModal,
        closeModal,
        tasks,
        setTasks,
        task,
        setEdit,
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider };
export default TaskContext;
