import * as registerData from './register'

export class customerData{
    personalData: registerData.Personal;
    addressData: registerData.Address;
    paymentData: registerData.Payment;
    lastRegisterStep: number;
    active: boolean;
}