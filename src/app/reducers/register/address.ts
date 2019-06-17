import { Action } from '@ngrx/store';
import { addressActionTypes } from '../../actions/register';
import { Address } from 'src/app/models/register';
import { UpdateAddressLS } from 'src/app/services/localStorage';

export const initialAddress: Address = { street: "", houseNumber: "", zipCode: "", city: "" };

export function addressReducer(state: Address = initialAddress, action: Action) {
  switch (action.type) {
      case addressActionTypes.setAddress:
        state = action.payload;
        UpdateAddressLS(state);
        return state;
      
      case addressActionTypes.setStreet:
        state.street = action.payload;
        UpdateAddressLS(state);
        return state;
            
      case addressActionTypes.setHouseNumber:
        state.houseNumber = action.payload;
        UpdateAddressLS(state);
        return state; 
            
      case addressActionTypes.setZipCode:
        state.zipCode = action.payload;
        UpdateAddressLS(state);
        return state;

      case addressActionTypes.setCity:
        state.city = action.payload;
        UpdateAddressLS(state);
        return state;  
            
      default:
        return state;   
      }
}