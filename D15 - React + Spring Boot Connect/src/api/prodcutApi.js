import axios from "axios"

const base_url = import.meta.env.VITE_API_URL;

export const saveProduct = async (prodcut) => {

    return await axios.post(import.meta.env.VITE_API_URL + "/products/save-product", prodcut);
}

export async function getProduct() {
    return await axios.get(import.meta.env.VITE_API_URL + "/products/get-products")
}

export const getProductById = async (id) => {
    return await axios.get(`${base_url}/products/get-product/${id}`);
}

export const updateProduct = async (id, price) => {
    return await axios.put(`${base_url}/products/update/${id}/${price}`);
} 

export const deleteProduct = async (id) => {
    return await axios.delete(`${base_url}/products/delete/${id}`);
} 
