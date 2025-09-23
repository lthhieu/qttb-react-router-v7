import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URI,
    withCredentials: true,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // return Promise.reject(error);
    return console.error(error);
});

export default instance;