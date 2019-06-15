import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import {Success, Danger, Observed, Normal, csep, clog, csepE} from '../../messages/console';
import { Payment, Personal, Address } from 'src/app/models/register';
import { customerData } from 'src/app/models/customerData';
import { async } from '@angular/core/testing';
import { setFirstName, setLastName, setCustomerId, setTelephone, setStreet, setZipCode, setIban, setAccountOwner, setHouseNumber } from 'src/app/actions/register';


let personal: any;

const personalObserver = {
  next: x => console.log('%c  New Personal values: ' + JSON.stringify(x, null, 2), Observed),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

const paymentObserver = {
  next: x => console.log('%c  New Payment values: ' + JSON.stringify(x, null, 2), Observed),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

const addressObserver = {
  next: x => console.log('%c  New Address values: ' + JSON.stringify(x, null, 2), Observed),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  personalData$: Observable<Personal>;
  personalSub: any;
  paymentData$: Observable<Payment>;
  paymentSub: any;
  addressData$: Observable<Address>;
  addressSub: any;
  customerData: customerData;
  currentUserSubject: BehaviorSubject<Address>;

  //Personal
  firstName$: Observable<string>;
  lastName$: Observable<string>;
  telephone$: Observable<string>;

  //Payment
  accountOwner$: Observable<string>;
  iban$: Observable<string>;
  customerId$: Observable<number>;
  paymentDataId$: Observable<string>;

  //Address
  street$: Observable<string>;
  houseNumber$: Observable<string>;
  zipCode$: Observable<string>;


  constructor(
    private store: Store<{personal: Personal, address: Address, payment: Payment}>,

  ) {
    console.log("\r");
    clog("Observer Output:", Normal);
    this.personalData$ = store.pipe(select(state => state.personal));
    this.personalSub = this.personalData$.subscribe(personalObserver);
    this.paymentData$ = store.pipe(select(state => state.payment));
    this.paymentSub = this.paymentData$.subscribe(paymentObserver);
    this.addressData$ = store.pipe(select(state => state.address));
    this.addressSub = this.addressData$.subscribe(addressObserver);
    this.customerData = { personalData: this.personalSub, addressData: this.addressSub, paymentData: this.paymentSub, lastRegisterStep : 0 }


    
  }
 
  getPersonalData() {
    this.firstName$ = this.store.pipe(select(state => state.personal.firstName));
    this.lastName$ = this.store.pipe(select(state => state.personal.lastName));
    this.telephone$ = this.store.pipe(select(state => state.personal.telephone));
  }

  getAddressData() {
    this.street$ = this.store.pipe(select(state => state.address.street));
    this.houseNumber$ = this.store.pipe(select(state => state.address.houseNumber));
    this.zipCode$ = this.store.pipe(select(state => state.address.zipCode));
  }

  getPaymentData() {
    this.accountOwner$ = this.store.pipe(select(state => state.payment.accountOwner));
    this.iban$ = this.store.pipe(select(state => state.payment.iban));
    this.customerId$ = this.store.pipe(select(state => state.payment.customerId));
    this.paymentDataId$ = this.store.pipe(select(state => state.payment.paymentDataId));
  }

  changeStore(event) {
    // Switch with 'Magic Strings' is super bad practise but a quick solution for now.
    switch (event.target.id) {
      case 'inputPfN':
        this.store.dispatch(new setFirstName(event.target.value));
        break;
      case 'inputPlN':
        this.store.dispatch(new setLastName(event.target.value));
        break;
      case 'inputPt':
        this.store.dispatch(new setTelephone(event.target.value));
        break;
      case 'inputAs':
        this.store.dispatch(new setStreet(event.target.value));
        break;    
      case 'inputAhN':
        this.store.dispatch(new setHouseNumber(event.target.value));
        break; 
      case 'inputAzC':
        this.store.dispatch(new setZipCode(event.target.value));
        break; 
      case 'inputPaO':
        this.store.dispatch(new setAccountOwner(event.target.value));
        break; 
      case 'inputPi':
        this.store.dispatch(new setIban(event.target.value));
        break; 
        
    }  
  }

  ngOnInit(): void {
    csep();
    clog("User initialized Component: Register", Success);
    this.store.dispatch(new setFirstName("abcde"));
    this.store.dispatch(new setLastName("Keks"));

    this.getPersonalData();
    this.getAddressData();
    this.getPaymentData()

    
     
  }

}
