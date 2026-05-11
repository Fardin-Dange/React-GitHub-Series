import React, { useState } from 'react'

const Login = () => {

    let [user, setUser] = useState({username:"", password:""});

    function handleSbmit(e) {
        localStorage.setItem("user", JSON.stringify(user));
    }


  return (
    <div>
      <form onSubmit={handleSbmit} method='post'>

        username : <input type="text" name='uname' onChange={(e) => 
            setUser({...user, username:e.target.value})
        } />
        <br /><br />

        password : <input type="text" name='password' onChange={(e) => 
            setUser({...user, password:e.target.value})
        }/>
        <br /><br />

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Login
