import { useEffect, useState } from "react"

import {fetchuser} from "../src/api Calling/userApi"

function App() {

  const [users, setUsers] = useState([])

  useEffect(()=>{

    //fetch directly yaha bhi likh sakte hai but company standard ke hisab se alag file me rakhna better hota hai taki code clean rahe aur reusability bhi badh jaye.
    // fetch("http://localhost:8080/api/products/get-all-prodcuts")
    //           .then(res => res.json())
    //           .then(data => setUsers(data))
    //           .catch(e => console.log(e))

    fetchuser()
              .then(res => res.json())
              .then(data => setUsers(data))
              .catch(e => console.log(e))
  } ,[])

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
                
                    {users.map((e) => {
                      return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.productName}</td>
                                <td>{e.quantity}</td>
                             </tr>

                    }) }
                
            </tbody>
      </table>
    </>
  )
}

export default App;