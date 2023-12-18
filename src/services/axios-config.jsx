import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:3030";
axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

const errorHandle = (error) => {
    const statusCode = error.response.status;

    if(statusCode && statusCode !== 401) {
        console.log("errorHandle", error);
    }
    return Promise.reject(error);
}

axiosClient.interceptors.response.use((response) => {
    return response;
}, errorHandle);

export default axiosClient;