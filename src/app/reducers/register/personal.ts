import { Action } from '@ngrx/store';
import { personalActionTypes } from '../../actions/register';
import { Personal }from 'src/app/models/register';



export const initialPersonal = new Personal("abc", "abc", "abc");

export function personalReducer(state: Personal = initialPersonal, action: Action) {
  switch (action.type) {
    case personalActionTypes.setFirstName:
      state.firstName = action.payload;
      return state;
          
    case personalActionTypes.setLastName:
      state.lastName = action.payload;
      console.log(state); 
      return state; 
          
    case personalActionTypes.setTelephone:
      state.telephone = action.payload;
      return state;  
          
    default:
      return state;   
    }
}
