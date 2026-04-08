import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Navigation in react using Navigate </h1>
      <button onClick={() => {navigate('/login')}}>Go to Login Page</button>

      <Routes>
          <Route path = '/dashboard' element = {<Dashboard/>}></Route>
          <Route path = '/login' element = {<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App
