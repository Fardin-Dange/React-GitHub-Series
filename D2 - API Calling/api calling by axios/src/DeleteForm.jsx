import React, { useState } from 'react'
import { axiosDeleteApi } from './apis/userApi';

const DeleteForm = (props) => {
    let[pID, setPID] = useState("");
    let handleChange = (e) => {  
        setPID(e.target.value);
        
        
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        axiosDeleteApi(pID)
                          .then(res => {
                                console.log(res)
                                props.scount(prev => prev +1)}
                            )
                          .catch(err => console.log(err));
        setPID("");
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            product ID: <input type="text" onChange={handleChange} value={pID} />
            <br /><br />
            <button>Delete</button> 

    </form>
    </div>
  )
}

export default DeleteForm
