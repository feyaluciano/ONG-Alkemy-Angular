import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  action: string = 'Lista de Slides';

  constructor() { }

  ngOnInit(): void {
  }

}
