import { Action } from '@ngrx/store';
import { Personal } from 'src/app/models/register';

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export enum personalActionTypes {
    setPersonal = '[Register Component] [Personal] setPersonal',
    setFirstName = '[Register Component] [Personal] setFirstName',
    setLastName = '[Register Component] [Personal] setLastName',
    setTelephone = '[Register Component] [Personal] setTelephone'
}
  
export class setPersonal implements Action {
    readonly type = personalActionTypes.setPersonal;
    constructor(public payload: Personal) { }
}

export class setFirstName implements Action {
    readonly type = personalActionTypes.setFirstName;
    constructor(public payload: string) { }
}
  
export class setLastName implements Action {
    readonly type = personalActionTypes.setLastName;
    constructor(public payload: string) { }
}
  
export class setTelephone implements Action {
    readonly type = personalActionTypes.setTelephone;
    constructor(public payload: string) { }
  }