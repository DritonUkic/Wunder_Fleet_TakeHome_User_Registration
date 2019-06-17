import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import {Success, Danger, Observed, Normal, csep, clog, csepE} from '../../messages/console';
import { Payment, Personal, Address } from 'src/app/models/register';
import { customerData } from 'src/app/models/customerData';
import { async } from '@angular/core/testing';
import { setFirstName, setLastName, setCustomerId, setTelephone, setStreet, setZipCode, setIban, setHouseNumber, setCity, setPersonal, setPayment, setAddress, setOwner, setPaymentDataId } from 'src/app/actions/register';
import { RegisterService, AlertService, UpdateStepLS, CheckLS, getStep, getUser, getActive, UpdateActiveLS } from '@app/services';

import {MatSnackBar} from '@angular/material/snack-bar';


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
  owner$: Observable<string>;
  iban$: Observable<string>;
  customerId$: Observable<number>;
  paymentDataId$: Observable<string>;

  //Address
  street$: Observable<string>;
  houseNumber$: Observable<string>;
  zipCode$: Observable<string>;
  city$: Observable<string>;

  stepNumber: number = 0;
  loading: boolean = false;
  active: boolean = false;
  
  formError: boolean = false;

  missingArr = [];

  constructor(
    private store: Store<{personal: Personal, address: Address, payment: Payment}>,
    private registerService: RegisterService,
    private alertService: AlertService,
    private _snackBar: MatSnackBar
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
    this.owner$ = this.store.pipe(select(state => state.payment.owner));
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
        this.store.dispatch(new setOwner(event.target.value));
        break; 
      case 'inputPi':
        this.store.dispatch(new setIban(event.target.value));
        break; 
        
    }  
  }

  submitPaymentData() {
    this.loading = true;
    let slicedPaymentData = getUser().paymentData;
    delete slicedPaymentData.paymentDataId;
    this.registerService.PostPaymentData(slicedPaymentData)
        .pipe(first())
        .subscribe(
            data => {
            //  this.alertService.success("" + data.paymentDataId, true);
              let res: any;
              res = data;
              this.store.dispatch(new setPaymentDataId(res.paymentDataId));
              this.active = true;
              UpdateActiveLS(this.active);
              this.loading = false;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

  //Increment? True or false
  chgStep(BoolInc) {
    if (this.stepNumber === 2 && BoolInc) {
      if (this.checkForm()) {
        this.stepNumber++;
        UpdateStepLS(this.stepNumber);
        this.submitPaymentData()
      }
      else {
        this.formError = true;
      }
    }
    else if (this.stepNumber < 2 || !BoolInc) {
      BoolInc ? this.stepNumber++ : this.stepNumber--;
      UpdateStepLS(this.stepNumber);
    }
  }

  checkForm() {
    this.missingArr = [];
    let User = getUser();
    User.personalData.firstName.length === 0 ? this.missingArr.push("Personal: Firstname") : undefined;
    User.personalData.lastName.length === 0 ? this.missingArr.push("Personal: Lastname") : undefined;
    User.personalData.telephone.length === 0 ? this.missingArr.push("Personal: Telephone") : undefined;
    User.addressData.zipCode.length === 0 ? this.missingArr.push("Address: Zipcode") : undefined;
    User.addressData.city.length === 0 ? this.missingArr.push("Address: City") : undefined;
    User.addressData.street.length === 0 ? this.missingArr.push("Address: Street") : undefined;
    User.addressData.houseNumber.length === 0 ? this.missingArr.push("Address: Housenumber") : undefined;
    User.paymentData.owner.length === 0 ? this.missingArr.push("Payment: Owner") : undefined;
    User.paymentData.iban.length === 0 ? this.missingArr.push("Payment: IBAN") : undefined;
    if (this.missingArr.length === 0) {
      return true;
    }
    return false;
  }

  ngOnInit() {
    // Check if a stored user already exists. On true update RegisterComponent states and get Steps
    if (CheckLS().exists) {
      this.store.dispatch(new setPersonal(CheckLS().storedUser.personalData));
      this.store.dispatch(new setPayment(CheckLS().storedUser.paymentData));
      this.store.dispatch(new setAddress(CheckLS().storedUser.addressData));
      this.stepNumber = getStep();
      this.active = getActive();
    }
    // Get States
    this.getPersonalData();
    this.getAddressData();
    this.getPaymentData();
  }

  copyId() {
    var copied = document.getElementById('PID') as HTMLInputElement;
    copied.select();
    document.execCommand("copy");
    console.log(copied);
    this._snackBar.open("Copied!", "Close", {
      duration: 2000,
    });
  }
}
