import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';

const Profile = () => {
  const user =useOutletContext();
  return (
    <div>
      <h1>This is Profile Page</h1>
      <p>Welcome, {user.name}!</p>
      <p>You are {user.age} years old.</p>
    </div>
  )
}

export default Profile
