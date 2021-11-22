import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
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
      this.router.navigate(['/gracias']);
      return true;
    }
  }

  testing(){

    let preference = {
      external_reference:"abc",
      items:[
          {
              title:"Donaciones",
              description:"ONG Somos Más",
              quantity:1,
              unit_price:10000,
              picture_url:"https://tienda.capellansf.net/wp-content/uploads/2021/03/20191212-donacion.jpg"
          }
      ],
      back_urls: {
        success:"http://localhost:4200/gracias",
        failure:"http://localhost:4200/gracias",
        pending: ""
      }
  }
    this.mercadopago.createPreference(preference).subscribe(r => {
      console.log(r)

      window.location.href = r.sandbox_init_point;
    });

  }

}
