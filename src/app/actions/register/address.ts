import { Action } from '@ngrx/store';

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export enum addressActionTypes {
    setStreet = '[Register Component] [Address] setStreet',
    setHouseNumber = '[Register Component] [Address] setHouseNumber',
    setZipCode = '[Register Component] [Address] setZipCode'
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