import { Action } from '@ngrx/store';
import { addressActionTypes } from '../../actions/register';

export function addressReducer(Data: any, action: Action) {
    switch (action.type) {
        case addressActionTypes.setStreet:
          // Logic  
          return Data;
            
        case addressActionTypes.setHouseNumber:
          // Logic  
          return Data; 
            
        case addressActionTypes.setZipCode:
          // Logic  
          return Data;  
            
        default:
          // Logic  
          return Data;   
      }
}