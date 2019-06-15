import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import {Success, Danger, Observed, Normal, csep, clog, csepE} from '../../messages/console';
import { Payment, Personal, Address } from 'src/app/models/register';
import { customerData } from 'src/app/models/customerData';
import { async } from '@angular/core/testing';
import { setFirstName, setLastName, setCustomerId, setTelephone, setStreet, setZipCode, setIban, setAccountOwner, setHouseNumber, setCity, setPersonal, setPayment, setAddress } from 'src/app/actions/register';
import { UpdateStepLS, CheckLS, getStep, initNewLS } from 'src/app/services/localStorage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
  city$: Observable<string>;

  stepNumber = 0 ;

  constructor(
    private store: Store<{personal: Personal, address: Address, payment: Payment}>,

  ) {
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
    this.city$ = this.store.pipe(select(state => state.address.city));
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
      case 'inputAc':
        this.store.dispatch(new setCity(event.target.value));
        break; 
      case 'inputPaO':
        this.store.dispatch(new setAccountOwner(event.target.value));
        break; 
      case 'inputPi':
        this.store.dispatch(new setIban(event.target.value));
        break; 
        
    }  
  }
  //Increment? True or false
  chgStep(BoolInc) {
    BoolInc ? this.stepNumber++ : this.stepNumber--;
    UpdateStepLS(this.stepNumber);
    /*
    switch (this.stepNumber) {
      case 0:
        this.getPersonalData()  
        break;

      case 1:
        this.getAddressData()  
        break;

      case 2:
        this.getPaymentData()  
        break; 
    } */
  }

  ngOnInit() {
    csep();
    clog("User initialized Component: Register", Success);
    if (CheckLS().exists) {
      this.store.dispatch(new setPersonal(CheckLS().storedUser.personalData));
      this.store.dispatch(new setPayment(CheckLS().storedUser.paymentData));
      this.store.dispatch(new setAddress(CheckLS().storedUser.addressData));
      this.stepNumber = getStep();
    }

    this.getPersonalData();
    this.getAddressData();
    this.getPaymentData();

    
     
  }

}
