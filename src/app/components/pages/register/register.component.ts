import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Success, Danger, Observed, Normal, csep, clog, csepE} from '../../messages/console';
import { Payment, Personal, Address } from 'src/app/models/register';

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


  constructor(private store: Store<{ count: any, intervall: number }>) {
    this.personalData$ = store.pipe(select('personal'));
    this.personalSub = this.personalData$.subscribe(personalObserver);
    this.paymentData$ = store.pipe(select('payment'));
    this.paymentSub = this.paymentData$.subscribe(paymentObserver);
    this.addressData$ = store.pipe(select('address'));
    this.addressSub = this.addressData$.subscribe(addressObserver);
   }

  ngOnInit() {
  }

}
