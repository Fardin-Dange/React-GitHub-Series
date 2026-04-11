import React, { useContext } from 'react'
import userContext from './context/userContext';

const Profile = () => {
    const user = useContext(userContext);
  return (
    <div>

      <h3>This is Profile</h3>
        <p>user name is : {user}</p>
    </div>
  )
}

export default Profile
