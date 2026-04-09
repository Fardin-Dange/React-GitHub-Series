import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  let [user, setUser] = useState({
                                    name : "Fardin",
                                    age : 25

                                  });
  return (
    <div>
        <Link to="/dashboard/profile">Profile</Link> {" | "}
        <Link to="/dashboard/setting">Setting</Link>
        <h1>This is Dashboard Page</h1>
        <Outlet context={user}/>
    </div>
  )
}

export default Dashboard
