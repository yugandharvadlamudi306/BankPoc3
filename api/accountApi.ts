import axiosClient from "./axiosClient.ts";

export const accountApi = async () => {
    const response = await axiosClient.get(`/accounts`);
    return response.data;
}