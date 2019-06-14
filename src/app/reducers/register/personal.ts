import { Action } from '@ngrx/store';
import { personalActionTypes } from '../../actions/register';

export function personalReducer(Data: any, action: Action) {
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