import {LoginRequest} from "../model/LoginRequest.ts";
import {LoginResponse} from "../model/LoginResponse.ts";
import {loginApi} from "../api/authApi.ts";


class AuthService {
    async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        const response = await loginApi(loginRequest.username,loginRequest.password);
        const users  = await response;
        console.log(users)
        if(users.length===0){
            throw new Error('Invalid Username or Password');
        }
        else{
            return {
                success: true,
                token: users[0].token,
                user: {
                    id: users[0].id,
                    name: users[0].name,
                },
            };
        }
    }
}

export default new AuthService();