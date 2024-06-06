import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/Axios";

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});


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

  const saveTasks = async (task) => {
    if (task.id) {
      try {
        const { data } = await clientAxios.put(`/task/${task.id}`, task);
        const updateTasks = tasks.map(tasktState => tasktState.id === data._id ? data : tasktState);
        setTasks(updateTasks);
      } catch (error) {
        console.log(error.massage);
      }
    } else {
      try {
        await clientAxios.post("/task", task);
      } catch (error) {
        console.log(error.massage);
      }
    }
  }

  const setEdit = task => {
    setTask(task);
    toggleModal();
  }

  const deleteTask = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this task?");
    if (confirm) {
      try {
        await clientAxios.delete(`/task/${id}`);
      } catch (error) {
        console.log(error)
      }
    }
  }

  const setStatus = async (taskStatus) => {
    const updateTask = { ...task, status: taskStatus.status ? false : true };
    console.log(updateTask);
    try {
      const { data } = await clientAxios.put(`/task/${taskStatus._id}`, updateTask);
      const updatedTasks = tasks.map(task => task._id === data._id ? data : task);
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error)
    }
    console.log(task)
    console.log(tasks)
  }

  const toggleModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
    setTask({});
  }


  return (
    <TaskContext.Provider
      value={{
        saveTasks,
        modal,
        setModal,
        toggleModal,
        closeModal,
        tasks,
        setTasks,
        task,
        setEdit,
        deleteTask,
        setStatus
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider };
export default TaskContext;
