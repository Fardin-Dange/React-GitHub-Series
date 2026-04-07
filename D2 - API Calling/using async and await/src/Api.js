import axios from "axios";

export async function fetchData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    return res;
}