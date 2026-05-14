import React from 'react'

const App = () => {
  const arr = [
        {
          id: 1,
          name: 'John Doe',
          age: 30
        },
        {
          id: 2,
          name: 'Jane Smith',
          age: 25
        },
        {
          id: 3,
          name: 'Bob Johnson',
          age: 40
        },
        {
          id: 4,
          name: 'Alice Brown',
          age: 28
        },
        {
          id: 5,
          name: 'Tom Wilson',
          age: 35
        }
      ]

      const user = arr.find((e) => {
              return e.age === 40
            })
  return (
    <div>
      <h1>Array and Map Example</h1>

      <table border={1}>
        
        <thead>
           <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>  
          </tr>
        </thead> 

        <tbody>
              {
            arr.map((e) => {
              return <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                    </tr>
            })
           }
        </tbody>
           
        
      </table>

      <h1>Array and filter Example</h1>
       <table border={1}>

        <thead>
           <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>  
          </tr>
        </thead> 
      
        <tbody>
              {
            arr.filter((e) => {
              return e.age >= 30 
            })
              .map((e) => {
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                </tr>
              })
              }
        
        </tbody>
           
      </table>

      <h1>Array and Find example</h1>
      <p>It returns the first item ie the first elem from the array which satisfy the cond </p>
      
      <table border={1}>

        <thead>
           <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>  
          </tr>
        </thead> 
      
        <tbody>
              <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
        
        </tbody>
           
      </table>

      <h1>Array and reduce example</h1>
      <p>reduce() is used to combine all array elements into a single value.

It works using an accumulator which stores the previous result.

It is commonly used to find:

* total sum
* cart total
* counts
* maximum value
 </p>

    <p>
      Total age is :   {
      arr.reduce((acc, curr) => {
        return acc + curr.age
      }, 0)
    }
    </p>
    

     <h1>Array and sort Example</h1>
    
    <table border={1}>

        <thead>
           <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>  
          </tr>
        </thead> 
      
        <tbody>
              {
            arr.sort((a, b) => {
              return a.age - b.age
            })
              .map((e) => {
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                </tr>
              })
              }
        
        </tbody>
           
      </table>  

      
    </div>
  )
}

export default App
