import { Action } from '@ngrx/store';
import { paymentActionTypes } from '../../actions/register';
import { Payment }from 'src/app/models/register';

export const initialPayment = new Payment("abc","abc","abc",5);

export function paymentReducer(Data = initialPayment, action: Action) {
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