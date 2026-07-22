import {BalanceRequest} from "./BalanceRequest.ts";
import {BalanceResponse} from "./BalanceResponse.ts";
import api from "../api/axiosClient.ts";

export const getBalance = async (
    request: BalanceRequest,
): Promise<BalanceResponse> => {
    const response = await api.post<BalanceResponse>(
        '/balance',
        request,
    );

    return response.data;
};