import { Action } from '@ngrx/store';
import { addressActionTypes } from '../../actions/register';
import { Address } from 'src/app/models/register';

export const initialAddress = new Address("abc","abc","abc");

export function addressReducer(Data = initialAddress, action: Action) {
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