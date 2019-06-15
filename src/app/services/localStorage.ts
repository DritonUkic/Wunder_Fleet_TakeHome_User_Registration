import { Personal, Address, Payment } from 'src/app/models/register';
import { customerData } from 'src/app/models/customerData';
import { initialPersonal, initialAddress, initialPayment } from 'src/app/reducers/register';
import { setFirstName, setLastName, setCustomerId, setTelephone, setStreet, setZipCode, setIban, setAccountOwner, setHouseNumber, setCity, setPersonal } from 'src/app/actions/register';
import { Store, select } from '@ngrx/store';

const iniPersonal: Personal = { firstName: "", lastName: "", telephone: "" };
const iniAddress: Address = { street: "", houseNumber: "", zipCode: "", city:"" };
const iniPayment: Payment = { accountOwner: "", iban: "", customerId:0, paymentDataId:"" };


let User: customerData = {personalData: iniPersonal, addressData: iniAddress, paymentData: iniPayment, lastRegisterStep:0}
export let Step: number = 0;

export function CheckLS() {
    let exists: boolean;
    let storedUser: customerData = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser === null) {
        exists = false;
    }
    else {
        exists = true;
        User = storedUser;
        localStorage.setItem('currentUser', JSON.stringify(User));
    }
    return { exists:exists, storedUser: storedUser }
}

export function UpdatePersonalLS(Personal: Personal) {
    User.personalData = Personal;
    localStorage.setItem('currentUser', JSON.stringify(User));
}
export function UpdateAddressLS(Address:Address) {
    User.addressData = Address;
    localStorage.setItem('currentUser', JSON.stringify(User));
}
export function UpdatePaymentLS(Payment:Payment) {
    User.paymentData = Payment;
    localStorage.setItem('currentUser', JSON.stringify(User));
}
export function getStep() {
    return User.lastRegisterStep;
}
export function UpdateStepLS(Step) {
    User.lastRegisterStep = Step;
    localStorage.setItem('currentUser', JSON.stringify(User));
}