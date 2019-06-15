export class Payment {
    constructor(accountOwner: string, iban: string, paymentDataId: string, customerId: number) {
        this.accountOwner = accountOwner;
        this.iban = iban;
        this.paymentDataId = paymentDataId;
        this.customerId = customerId;
    }
    accountOwner: string;
    iban: string;
    paymentDataId: string;
    customerId: number;
}