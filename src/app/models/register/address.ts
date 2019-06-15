export class Address {
    constructor(street: string, houseNumber: string, zipCode: string) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.zipCode = zipCode;
    }
    street: string;
    houseNumber: string;
    zipCode: string;
}