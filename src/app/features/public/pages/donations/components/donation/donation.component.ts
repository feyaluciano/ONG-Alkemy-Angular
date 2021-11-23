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

  title: string = 'Hola! Cómo estás?'
  message: string = `En Somos Más trabajamos con los chicos y chicas, mamás y papás,
  abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de
  inserción social. Estaremos eternamente agradecidos por tu aporte porque, por más pequeño que sea, nos va a permitir poder ayudar a más chicos. 
  De verdad, GRACIAS!`;
  spinner: boolean = false;

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

      // spinner
      this.spinner = true;

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
      
      this.spinner = false;

      window.location.href = r.sandbox_init_point;

    });

      
      return true;
    }
  }

  

}
