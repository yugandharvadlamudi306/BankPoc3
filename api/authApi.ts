import axiosClient from "./axiosClient.ts";

export const loginApi = async (userName: string, password: string) => {
    console.log("loginApi userName", userName);
    try{
    const response = await axiosClient.get("/users?username=" + userName);
    return response.data;}
    catch(error:any){
        console.log("========== API ERROR ==========");

        console.log("Message:", error.message);

        console.log("Code:", error.code);

        console.log("Response:", error.response);

        console.log("Request:", error.request);

        console.log("Config:", error.config);

        throw error;
    }
}
    /*?username=${userName}*/