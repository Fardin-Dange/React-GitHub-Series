import React from 'react'
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/users");

  let {value, setValue} = useLocalStorage("Naao" , "Raju");
  if(loading) return <h1>Loading! ...</h1>

  return (
    <div>
      {
        data.map((user, indx) => {
          return <p id={indx} key={indx}>{user.name}</p>
        })
      }

      <h2>{value}</h2>
      <input type="text" onChange={(e) => {
        setValue(e.target.value);
      }}/>
    </div>
  )
}

export default App
