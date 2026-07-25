import {AccountsResponse} from "../model/AccountsResponse.ts";
import {accountApi} from "../api/accountApi.ts";

class AccountsService {
    async getAccounts(): Promise<AccountsResponse[]> {
        const response = await accountApi()
        return response;
    }
}
export default new AccountsService();