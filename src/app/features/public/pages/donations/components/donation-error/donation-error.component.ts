import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-error',
  templateUrl: './donation-error.component.html',
  styleUrls: ['./donation-error.component.scss']
})
export class DonationErrorComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/donar']);
  }

}
