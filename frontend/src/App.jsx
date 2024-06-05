import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'
import CreateUser from './page/CreateUser'
import { TaskProvider } from './context/TaskProvider'
function App() {

  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App
