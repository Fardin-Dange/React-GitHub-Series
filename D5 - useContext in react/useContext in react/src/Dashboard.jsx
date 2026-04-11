import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = ({children}) => {
  return (
    <div>
      <h3>This is Dashboard</h3>
      {children}
    </div>
  )
}

export default Dashboard
