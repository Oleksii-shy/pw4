import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});



let getUsers = () => axiosInstance();

let getPosts = (id) => axiosInstance('/' + id + '/posts');

export {getUsers, getPosts}