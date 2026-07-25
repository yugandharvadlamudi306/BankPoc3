import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },

});
axiosClient.interceptors.request.use(config => {
    console.log("Base URL:", config.baseURL);
    console.log("URL:", config.url);
    console.log("Full URL:", `${config.baseURL}${config.url}`);
    return config;
});
export default axiosClient;