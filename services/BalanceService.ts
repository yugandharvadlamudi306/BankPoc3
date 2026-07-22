import {BalanceRequest} from "../model/BalanceRequest.ts";
import {BalanceResponse} from "../model/BalanceResponse.ts";


class BalanceService {
    getBalance(
        request: BalanceRequest,
    ): Promise<BalanceResponse> {
        return new Promise(resolve => {
            setTimeout(() => {
                const balances: Record<string, number> = {
                    Savings: 85000,
                    Current: 45000,
                    Salary: 120000,
                };

                resolve({
                    success: true,
                    accountType: request.accountType,
                    balance: balances[request.accountType] ?? 0,
                    currency: 'INR',
                });
            }, 1000);
        });
    }
}

export default new BalanceService();