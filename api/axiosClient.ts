import axios from "axios";
import Config from "react-native-config";

const axiosClient = axios.create({
    baseURL: Config.API_URL,
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