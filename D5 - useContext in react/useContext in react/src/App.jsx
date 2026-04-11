import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Profile from './Profile'
import userContext from './context/userContext'
import Settings from './Settings'

const App = () => {
  const [user, setUser] = useState("Fardin");
  return (
    <div>
      <h2>usecontext-in-react</h2>
      <h3>use contect in react is solution to the problem  of props drilling.</h3>
      <p>when we have to send the data from the parent to child we send it through props <br />
      but when the child is far deep in the tree relation then it becomes hard to pass the data. <br />
      we have to pass the data through all the intermediate components which is not good for performance and also it makes the code hard to read and maintain. <br />
      so to solve this problem we can use the usecontext hook in react. <br />
      it allows us to create a context and then we can use that context to pass the data to any component in the tree without having to pass it through props. <br />
      so this problem is called props drilling problem and usecontext is solution to that problem. <br />
      </p>
      <userContext.Provider value={user}>
      <Dashboard>
            <Profile/>
            <Settings/>
      </Dashboard>
      </userContext.Provider>
    
    </div>

    
  )
}

export default App
