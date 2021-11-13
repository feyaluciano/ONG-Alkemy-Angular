import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 title= 'Bienvenidos';
 
  constructor() { }

  ngOnInit(): void {
   
  }

}
