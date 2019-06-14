import { Action } from '@ngrx/store';

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export enum paymentActionTypes {
    setAccountOwner = '[Register Component] [Payment] setAccountOwner',
    setIban = '[Register Component] [Payment] setIban',
    setCustomerId = '[Register Component] [Payment] setCustomerId',
    setPaymentDataId = '[Register Component] [Payment] setPaymentDataId'
}
  
export class setAccountOwner implements Action {
    readonly type = paymentActionTypes.setAccountOwner;
    constructor(public payload: string) { }
}
  
export class setIban implements Action {
    readonly type = paymentActionTypes.setIban;
    constructor(public payload: string) { }
}
  
export class setCustomerId implements Action {
    readonly type = paymentActionTypes.setCustomerId;
    constructor(public payload: number) { }
}
  
export class setPaymentDataId implements Action {
    readonly type = paymentActionTypes.setPaymentDataId;
    constructor(public payload: number) { }
  }