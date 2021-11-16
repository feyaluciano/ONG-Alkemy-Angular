import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  @Input() text!: string | undefined;
  constructor() { }

  ngOnInit() {
  }

}
