import { LoginRequest } from "./LoginRequest";
import {LoginResponse} from "./LoginResponse.ts";
import api from "../api/axiosClient.ts";

export const login = async (
    request: LoginRequest,
): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/login', request);
    return response.data;
};