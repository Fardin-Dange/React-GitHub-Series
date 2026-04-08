import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <h1>Navigation in React</h1>
      <p>navigation done by two ways link and useNavigate</p>
      <p>with link we can navigate to another page but with the user click required </p>
      <p>but with useNavigate we can navigate to another page without user click required ie with code </p>
      <nav>
        <Link to="/login">Login</Link> {" | "}
        <Link to="/dashboard">Dashboard</Link> {" | "}
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>


    
  )
}

export default App
