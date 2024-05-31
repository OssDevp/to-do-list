import { createContext, useState } from "react";
import clientAxios from "../config/Axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [task, setTask] = useState({});

  function getTasks(user) {

    try {
      const { data } = clientAxios.get('/task', user)
      setTask(data)
      console.log(task)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <AuthContext.Provider
      value={{
        getTasks
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;