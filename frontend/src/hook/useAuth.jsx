import TaskContext from "../context/TaskProvider";
import { useContext } from "react";

const useAuth = () => {

  return useContext(TaskContext)
}

export default useAuth