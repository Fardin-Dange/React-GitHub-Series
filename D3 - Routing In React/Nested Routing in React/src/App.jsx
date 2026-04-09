import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Setting from './Pages/Setting'

const App = () => {
  return (
    
    <div>
      <h1>This is Home Page</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='setting' element={<Setting/>}></Route>
        </Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/setting' element={<Setting/>}></Route>
      </Routes>
    </div>
  )
}

export default App
