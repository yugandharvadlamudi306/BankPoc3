import axiosClient from "./axiosClient.ts";

export const getBalanceApi = async(accountId: number) => {
    const resposne = await axiosClient.get(`/balances?id=${accountId}`);
    if(__DEV__)
    console.log("getBalanceAPi data"+JSON.stringify(resposne.data));
    return resposne.data;
}