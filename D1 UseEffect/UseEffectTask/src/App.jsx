import React, { useEffect, useState } from 'react'

const App = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);
  let [city, setCity] = useState("");
  let [count, setCount] = useState(0);

  // useEffect(()=> {
  //   console.log("name :", name, " ", "age :", age," ", "city :", city)
  // },[name, city, age])

  useEffect(() => {
    console.log("name :", name, " ", "age :", age," ", "city :", city)
  },[count])

  let handleclick = (e) => {
    e.preventDefault;
      setCount(count+1);
  }

  return (
    <div>
      <h1>Aaj Ham Use Effect Padhenge</h1>
      {/* <form> */}
        Name :<input type="text" onChange={(e)=>{setName(e.target.value)}}/><br /><br />
        Age  :<input type="number" onChange={(e)=>{setAge(Number(e.target.value))}}/><br /><br />
        City :<input type="text" onChange={(e)=>{setCity(e.target.value)}}/><br /><br />
        <button onClick={handleclick}>Submit</button>
      {/* </form> */}
    </div>
  )
}

export default App
