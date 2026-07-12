
import React, { useEffect, useState } from 'react'

import { deleteProduct, getProduct } from '../api/prodcutApi'


const ProductList = () => {

    let [product , setProducts] = useState([]);
    const fetchData = async () => {
        const res = await getProduct();
        console.log(res.data)
        setProducts(res.data);
    }

    const delProduct = async (id) => {
        const res = await deleteProduct(id);
        console.log(res);
        fetchData();
    }

    useEffect(() => {
        fetchData()
    },[])

    
    
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Delete Data</th>
                </tr>
            </thead>

            <tbody>
                {product.map((p, i) => {
                    return <tr key={i}>
                                <td>{p.id}</td>
                                <td>{p.productName}</td>
                                <td>{p.productDetails}</td>
                                <td>{p.productPrice}</td>
                                <td><button onClick={() => {
                                    delProduct(p.id)
                                }}>delete</button></td>
                           </tr>
                })}
            </tbody>
           
        </table>
    </div>
  )
}

export default ProductList
