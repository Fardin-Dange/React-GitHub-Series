import React, { useEffect, useState } from 'react'

import {fetchData} from "./Api"

const App = () => {

  let [user, setUser] = useState([]);

  useEffect(() => {

    const data = async() => {

      try {
        const res = await fetchData();
        setUser(res.data);
      }
      catch(err) {
        console.log(err);
      }
    } 

    data();
    
  },[])
  return (
    <>
      <h1>Api Calling through Fetch function</h1>
      <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
              </tr>
              
            </thead>
            <tbody>
                
                    {user.map((e) => {
                      return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                             </tr>

                    }) }
                
            </tbody>
      </table>
    </>
  )
}

export default App
