import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Dashboard = () => {
  const {user} = useContext(UserContext);
  
  return (
    <div className='flex items-center justify-center h-screen w-full bg-indigo-600'>
      <h2 className='text-center text-4xl text-white'>Welcome to Dashboard</h2>
    </div>
  )
}

export default Dashboard
