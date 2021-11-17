import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  text: string = 'Gracias por su donación';
  constructor() { }

  ngOnInit() {
  }

}
