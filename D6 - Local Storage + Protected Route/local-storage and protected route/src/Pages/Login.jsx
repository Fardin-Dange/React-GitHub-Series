import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = ()=> {
  
  const {setUser} = useContext(UserContext);
  let {user} = useContext(UserContext);
  const navigate = useNavigate();

 

  return (
      <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e) => {
            e.preventDefault()
            setUser({...user, expiry : new Date().getTime() + 30 * 1000});
             if(user.username == "admin@123" && user.password == "admin"){ 
                localStorage.setItem('user', JSON.stringify(user));
             navigate('/dashboard');
            }
            else {
              alert("Invalid Username or Password")
            }
            }}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="username"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => {
                    setUser({...user, username : e.target.value})
                  }}
                />
              </div>
            </div>

            
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => {
                    setUser({...user, password : e.target.value})
                  }}
                />
              </div>
            </div>

            <br /><br />  


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
              >
                Sign in
              </button>
            </div>
          </form>

          
        </div>
    </div>
      </>
        
  )
}

export default Login;
