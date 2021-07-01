import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

let axiosInstanceComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

let getPosts = () => axiosInstance();
let getComments = () => axiosInstanceComments();

export {getPosts, getComments}