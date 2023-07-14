import axios from "axios";

// define API where a user will make a request to get his data
export const baseAxios = axios.create({
    // local link
    // baseURL: "http://localhost:3001/api",

    // deployed link
    baseURL: "https://foodify-delivery-api.onrender.com/api",
});
