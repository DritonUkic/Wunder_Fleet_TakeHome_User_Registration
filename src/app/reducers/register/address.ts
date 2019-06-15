import { Action } from '@ngrx/store';
import { addressActionTypes } from '../../actions/register';
import { Address } from 'src/app/models/register';

export const initialAddress = new Address("abc","abc","abc");

export function addressReducer(state: Address = initialAddress, action: Action) {
    switch (action.type) {
      case addressActionTypes.setStreet:
        state.street = action.payload; 
        return state;
            
      case addressActionTypes.setHouseNumber:
        state.houseNumber = action.payload;
        return state; 
            
      case addressActionTypes.setZipCode:
        state.zipCode = action.payload  
        return state;  
            
      default:
        return state;   
      }
}