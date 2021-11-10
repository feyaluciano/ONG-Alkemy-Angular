import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tituloprueba:string = "titulo prueba";

  descripcionprueba:string = "descripcion prueba"

  image ="../../../../../assets/images/header1.png"
}
