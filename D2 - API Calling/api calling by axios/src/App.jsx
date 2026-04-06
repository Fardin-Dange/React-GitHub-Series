import { useEffect, useState } from "react";
import { axiosApi } from "./apis/userApi";
import axios from "axios";
import Form from "./Form";
import DeleteForm from "./DeleteForm";

function App() {
  let [count, setCount] = useState(0);
  let [users, setUsers] = useState([]);



  useEffect(()=> {

    //directly bhi axios ko call karsakte but not preffered in copany standar

    // axios.get("https://jsonplaceholder.typicode.com/users")
    //           .then((res) => setUsers(res.data))
    //           .catch((err) => console.log(error));


      axiosApi()
              .then((res) => setUsers(res.data))
              .catch((err) => console.log(err))
          
    },[count])

  return (

    
    <>
    <h3>Api Calling using Axios</h3>
    <table border={1}>
          <thead>
              <tr>
                <th>Id</th>
                <th>ProdcutName</th>
                <th>Quantity</th>
              </tr>
          </thead>
          <tbody>
              {
                users.map((e) => {
                  return <tr key={e.id}>
                            <td>{e.id}</td>
                            {/* <td>{e.name}</td> */}
                            {/* <td>{e.email}</td> */}
                            <td>{e.productName}</td>
                            <td>{e.quantity}</td>
                  </tr>
                })
              }
          </tbody>
    </table>

    <hr />
    <hr />  

    <Form  fcount={count} scount={setCount}/>

    <DeleteForm fcount={count} scount={setCount}/>
    </>
  )
}

export default App;