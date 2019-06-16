import { Action } from '@ngrx/store';
import { paymentActionTypes } from '../../actions/register';
import { Payment }from 'src/app/models/register';
import { UpdatePaymentLS } from 'src/app/services/localStorage';

export const initialPayment: Payment = { customerId:1, iban:"", owner:"",  paymentDataId:"" }

export function paymentReducer(state: Payment = initialPayment, action: Action) {
  switch (action.type) {
        case paymentActionTypes.setPayment:
          state = action.payload;
          UpdatePaymentLS(state);
          return state;
      
        case paymentActionTypes.setOwner:
          state.owner = action.payload;
          UpdatePaymentLS(state);
          return state;
            
        case paymentActionTypes.setIban:
          state.iban = action.payload;
          UpdatePaymentLS(state);
          return state; 
            
        case paymentActionTypes.setCustomerId:
          state.customerId = action.payload;
          UpdatePaymentLS(state);
          return state;  
          
        case paymentActionTypes.setPaymentDataId:
          state.paymentDataId = action.payload;
          UpdatePaymentLS(state);
          return state;      
            
        default:  
          return state;   
      }
  }