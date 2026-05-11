import React, { useState } from 'react'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './Pages/ProtectedRoute'
import UserContext from './context/UserContext'


const App = () => {
  let [user, setUser] = useState({username : "", password : "", expiry: null});

  return (
    <div>
      <UserContext.Provider value = {{user, setUser}}>

        <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route element={<ProtectedRoute/>}>
          <Route path='dashboard' element={<Dashboard/>}></Route>
        </Route>
      </Routes>

      </UserContext.Provider>

    </div>
  )
}

export default App
