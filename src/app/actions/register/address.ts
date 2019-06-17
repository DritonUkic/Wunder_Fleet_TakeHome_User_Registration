import { Action } from '@ngrx/store';
import { Address } from 'src/app/models/register';

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export enum addressActionTypes {
    setAddress = '[Register Component] [Address] setAddress',
    setStreet = '[Register Component] [Address] setStreet',
    setHouseNumber = '[Register Component] [Address] setHouseNumber',
    setZipCode = '[Register Component] [Address] setZipCode',
    setCity = '[Register Component] [Address] setCity'
}

export class setAddress implements Action {
    readonly type = addressActionTypes.setAddress;
    constructor(public payload: Address) { }
}
  
export class setStreet implements Action {
    readonly type = addressActionTypes.setStreet;
    constructor(public payload: string) { }
}
  
export class setHouseNumber implements Action {
    readonly type = addressActionTypes.setHouseNumber;
    constructor(public payload: string) { }
}
  
export class setZipCode implements Action {
    readonly type = addressActionTypes.setZipCode;
    constructor(public payload: string) { }
}
  
export class setCity implements Action {
    readonly type = addressActionTypes.setCity;
    constructor(public payload: string) { }
  }