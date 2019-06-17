import { Action } from '@ngrx/store';
import { personalActionTypes } from '../../actions/register';
import { Personal }from 'src/app/models/register';
import { UpdatePersonalLS } from 'src/app/services/localStorage';


export const initialPersonal: Personal = { firstName:"",lastName:"",telephone:""};

export function personalReducer(state: Personal = initialPersonal, action: Action) {
  switch (action.type) {
    case personalActionTypes.setPersonal:
      state = action.payload;
      UpdatePersonalLS(state);
      return state;
      
    case personalActionTypes.setFirstName:
      state.firstName = action.payload;
      UpdatePersonalLS(state);
      return state;
          
    case personalActionTypes.setLastName:
      state.lastName = action.payload;
      UpdatePersonalLS(state);
      return state; 
          
    case personalActionTypes.setTelephone:
      state.telephone = action.payload;  
      UpdatePersonalLS(state);
      return state;  
          
    default:
      return state;   
    }
}
