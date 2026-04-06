import React, { useState } from 'react'
import {axiosPostApi} from "./apis/userApi"

const Form = (props) => {
    
    let [product, setProduct] = useState({productName:"", quantity:"", price:"", expiryDate:"", manufacturingDate:""})

    function handleChange(e) {
       const {name, value} = e.target;
       setProduct({...product, [name]:value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(product);
        axiosPostApi(product)
                            .then(res => console.log(res))
                            .catch(err => console.log(err));

        setProduct({productName:"", quantity:"", price:"", expiryDate:"", manufacturingDate:""})
        props.scount(prev => prev +1)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            product Name: <input type="text" onChange={handleChange} name='productName'/>
            <br /><br />
            product quantity<input type="number" onChange={handleChange} name='quantity'/>
            <br /><br />
             product Price<input type="number" onChange={handleChange} name='price'/>
             <br /><br />
             expiryDate<input type="date" onChange={handleChange} name='expiryDate'/>
             <br /><br />
             manufacturingDate<input type="date" onChange={handleChange} name='manufacturingDate'/>
             <br /><br />
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Form
