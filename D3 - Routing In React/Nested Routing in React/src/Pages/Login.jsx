import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let [user, setUser] = useState({
        username: 'admin',
        password: 'password'
    })

    const navigate = useNavigate();

    function handleChange(e){
        const {name, value} = e.target
        setUser({
            ...user
        , [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault;
        navigate("/dashboard")

    }





  return (
    <div>
      <h1>This is Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username"  name='username' onChange={handleChange}/>
        <br /><br />
        <input type="password" placeholder="Password" name='password' onChange={handleChange} />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
