import axios from "axios";
export function axiosApi() {

    // return axios.get("https://jsonplaceholder.typicode.com/users"); this is random api for testing
    return axios.get("http://localhost:8080/api/products/get-all-prodcuts");
}

export function axiosPostApi(product) {

    // return axios.get("https://jsonplaceholder.typicode.com/users"); this is random api for testing
    return axios.post("http://localhost:8080/api/products/add-product", product);
}

export function axiosDeleteApi(id) {

    // return axios.get("https://jsonplaceholder.typicode.com/users"); this is random api for testing
    return axios.delete("http://localhost:8080/api/products/delete-product/"+id);
}