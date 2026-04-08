import { useState } from "react"
import { Navigate } from "react-router-dom"


const Login = () => {

    let [isLoggedIn, setIsLoggedIn] = useState(false)

    let [users, setUsers] = useState({
        username: 'admin',
        password: 'admin'
    })

    function handleClick(e){
        e.preventDefault()
        if(users.username === 'admin' && users.password === 'admin'){
            setIsLoggedIn(true)
            console.log('Login Successfully')
        } else {
            alert('Invalid username or password')
        }
    }

    function handleChange(e){
        const {name, value} = e.target
        setUsers({...users, [name]: value})
    }


    if(isLoggedIn){
        return <Navigate to="/dashboard" />
    }
    

  return (
    <div>
      <h3>This is Login Page</h3>
      <form action="">
        <input type="text" placeholder='Username' name='username'onChange={handleChange}/> <br /><br />
        <input type="password" placeholder='Password' name='password'/><br /><br />
        <button type='submit' onClick={handleClick}>Login</button>
      </form>

    </div>
  )
}

export default Login
