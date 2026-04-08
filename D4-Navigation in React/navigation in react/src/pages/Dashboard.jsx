import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigaaate = useNavigate();
  return (
    <div>
      <h3>This is Dashboard Page</h3>

      <button onClick={() => {navigaaate('/login')} }>Logout</button>
    </div>
  )
}

export default Dashboard
