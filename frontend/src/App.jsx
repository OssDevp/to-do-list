import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './layout/Login'
import Home from './layout/Home'
import CreateUser from './layout/CreateUser'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
