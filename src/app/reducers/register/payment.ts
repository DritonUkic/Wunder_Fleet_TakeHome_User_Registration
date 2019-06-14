import { Action } from '@ngrx/store';
import { paymentActionTypes } from '../../actions/register';

export function paymentReducer(Data: any, action: Action) {
    switch (action.type) {
        case paymentActionTypes.setAccountOwner:
          // Logic  
          return Data;
            
        case paymentActionTypes.setIban:
          // Logic  
          return Data; 
            
        case paymentActionTypes.setCustomerId:
          // Logic  
          return Data;  
          
        case paymentActionTypes.setPaymentDataId:
          // Logic  
          return Data;      
            
        default:
          // Logic  
          return Data;   
      }
  }