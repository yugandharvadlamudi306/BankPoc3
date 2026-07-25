import {BalanceRequest} from "../model/BalanceRequest.ts";
import {BalanceResponse} from "../model/BalanceResponse.ts";
import {getBalanceApi} from "../api/balanceApi.ts";


class BalanceService {
    async getBalance(
        request: BalanceRequest,
    ): Promise<BalanceResponse[]> {
        const response = await getBalanceApi(request.id)
        console.log("balance Check"+response);
        return response;
    }
}

export default new BalanceService();