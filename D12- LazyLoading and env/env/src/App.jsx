import React, { useEffect } from 'react'

const App = () => {
  console.log(import.meta.env.VITE_API_URL);

  async function getData() {
    const response = await fetch(import.meta.env.VITE_API_URL + "/users");
    console.log(await response.json());
  }


  useEffect( () => {
    getData();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default App
