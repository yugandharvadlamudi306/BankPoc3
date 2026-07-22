export interface User {
    id: number;
    name: string;
}

export interface LoginResponse {
    success: boolean;
    token: string;
    user: User;
}