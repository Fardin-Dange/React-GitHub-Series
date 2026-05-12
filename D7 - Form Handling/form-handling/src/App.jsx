import React from 'react'
import { useState } from 'react'

const App = () => {

  let [user, setUser] = useState({name : "", email : "", password : ""})
  return (
    <div className='h-screen w-full flex justify-center items-center' >
      <div className='h-[65%] w-[25%] bg-green-200 p-10 rounded-3xl shadow-2xl'>
        <h1 className='text-center font-bold '>Form Handling in React</h1>

        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(user);
        }}>
          <br /><br />
            <label htmlFor="nam" >
              Name :  
            </label>
            <input onChange={(e) => {
              setUser({...user , name : e.target.value})
            }} type="text" name='name' id='nam' className='rounded-xs text-center ml-11 border border-black' placeholder='name'/>

            <br /><br />

            <label htmlFor="nam" >
              Email :  
            </label>
            <input onChange={(e) => {
              setUser({...user , email : e.target.value})
            }}   type="email" name='email' className='rounded-xs text-center ml-12 border border-black'  placeholder='email' value={user.email}/>

             <br /><br />

            <label htmlFor="nam" >
              Password :   
            </label>
            <input onChange={(e) => {
              setUser({...user , password : e.target.value})
            }} value={user.password} type="password" name='password' className='rounded-xs   text-center ml-5 border border-black'  placeholder='password'/>

            <br /><br />
            <button type='submit' className='ml-24 mt-10 bg-amber-600 px-6 py-1 rounded-xl shadow-2xs'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
