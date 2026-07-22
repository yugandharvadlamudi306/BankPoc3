import {LoginRequest} from "../model/LoginRequest.ts";
import {LoginResponse} from "../model/LoginResponse.ts";


class AuthService {
    login(request: LoginRequest): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    request.username === 'admin' &&
                    request.password === '1234'
                ) {
                    resolve({
                        success: true,
                        token: 'ABC123456',
                        user: {
                            id: 1,
                            name: 'Yugandhar',
                        },
                    });
                } else {
                    reject(new Error('Invalid Username or Password'));
                }
            }, 1000);
        });
    }
}

export default new AuthService();