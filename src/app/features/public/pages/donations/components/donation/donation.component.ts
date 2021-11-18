import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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

}
