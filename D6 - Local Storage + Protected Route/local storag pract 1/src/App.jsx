import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'

const App = () => {


  return (
    <div>

      <Routes>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
