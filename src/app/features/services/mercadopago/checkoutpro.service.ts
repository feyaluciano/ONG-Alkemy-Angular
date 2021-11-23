import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MercadoPagoResponse } from '../../public/models/mercadopago.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutproService {

  private urlMercagoPago: string = 'https://api.mercadopago.com/checkout/preferences?access_token=TEST-2818585338398945-111921-cc30651a1ce181bb8211f315f557d5df-454353831';

  constructor(private http: HttpClient) { }

  createPreference(preference:any):Observable<MercadoPagoResponse>{
    return this.http.post<MercadoPagoResponse>( this.urlMercagoPago, preference );
  }
}
