import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Payment } from '@app/models/register';

@Injectable({ providedIn: 'root' })
export class RegisterService {
    constructor(private http: HttpClient) { }

    PostPaymentData(paymentData: Payment) {
        console.log(paymentData);
        return this.http.post(`${environment.apiUrl}`, paymentData);
    }

}
