import { Action } from '@ngrx/store';
import { personalActionTypes } from '../../actions/register';
import { Personal }from 'src/app/models/register';

export const initialPersonal = new Personal("abc","abc","abc");

export function personalReducer(Data = initialPersonal, action: Action) {
  switch (action.type) {
      case personalActionTypes.setFirstName:
        // Logic  
        return Data;
          
      case personalActionTypes.setLastName:
        // Logic  
        return Data; 
          
      case personalActionTypes.setTelephone:
        // Logic  
        return Data;  
          
    default:
      // Logic  
      return Data;   
    }
}