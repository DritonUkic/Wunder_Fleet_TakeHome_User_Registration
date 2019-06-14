import { Action } from '@ngrx/store';

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export enum personalActionTypes {
    setFirstName = '[Register Component] [Personal] setFirstName',
    setLastName = '[Register Component] [Personal] setLastName',
    setTelephone = '[Register Component] [Personal] setTelephone'
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