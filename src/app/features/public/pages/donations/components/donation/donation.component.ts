import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutproService } from 'src/app/features/services/mercadopago/checkoutpro.service';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  public showThanks:boolean = false;
  public form: FormGroup;
  public message: string = 'Su donación es muy importante para nosotros.';
  public emptyValue: boolean = false;
  
  constructor(
    private _builder: FormBuilder,
    private mercadopago: CheckoutproService
  ) {
    this.form = this._builder.group({
      value: [""],      
    });
   }

  ngOnInit() { }

  donate(): boolean {
    if (!this.form.value.value) {
      this.emptyValue = true;
      return false;
    } else {

      // Checkout Pro MercadoPago
      let preference = {
        external_reference:"DonONGsm",
        items:[
            {
              title:"Donaciones",
              description:"ONG Somos Más",
              quantity:1,
              unit_price: this.form.controls['value'].value,
              picture_url:"https://tienda.capellansf.net/wp-content/uploads/2021/03/20191212-donacion.jpg"
            }
        ],
        back_urls: {
          success:"http://localhost:4200/gracias",
          failure:"http://localhost:4200/donar/error",
          pending: ""
        }
    }

    this.mercadopago.createPreference(preference).subscribe(r => {
      

      window.location.href = r.sandbox_init_point;

    });

      
      return true;
    }
  }

  

}
