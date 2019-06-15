import { Action } from '@ngrx/store';
import { paymentActionTypes } from '../../actions/register';
import { Payment }from 'src/app/models/register';

export const initialPayment = new Payment("abc","abc","abc",5);

export function paymentReducer(state: Payment = initialPayment, action: Action) {
    switch (action.type) {
        case paymentActionTypes.setAccountOwner:
          state.accountOwner = action.payload; 
          return state;
            
        case paymentActionTypes.setIban:
          state.iban = action.payload; 
          return state; 
            
        case paymentActionTypes.setCustomerId:
          state.customerId = action.payload; 
          return state;  
          
        case paymentActionTypes.setPaymentDataId:
          state.paymentDataId = action.payload;  
          return state;      
            
        default:  
          return state;   
      }
  }