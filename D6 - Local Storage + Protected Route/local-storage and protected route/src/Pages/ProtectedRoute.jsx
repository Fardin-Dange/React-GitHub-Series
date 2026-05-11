import React, { useContext } from 'react'
import Dashboard from './Dashboard'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../context/UserContext'

const ProtectedRoute = () => {
    // const {user} = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem("user"));
    if(user?.username == 'admin@123' && user?.password == 'admin' && user?.expiry > new Date().getTime()){
        return <Outlet/>
    }
    else {
        localStorage.removeItem('user');
        return <Navigate to='/'/>
    }
  
}

export default ProtectedRoute
