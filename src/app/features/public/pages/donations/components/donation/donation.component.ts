import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMaskDirective, CurrencyMaskInputMode } from 'ngx-currency';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  public showThanks:boolean=false;
  public form: FormGroup;

  
  constructor(private router: Router,private _builder: FormBuilder,) {
    this.form = this._builder.group({
      value: [""],      
    });
   }

  ngOnInit() {
    if (this.router.url==="/thanks"){
      this.showThanks=true;
    }
  }

}
