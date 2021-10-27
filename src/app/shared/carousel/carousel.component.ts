import { Component, Input, OnInit } from '@angular/core';
import { Datum } from 'src/app/core/interfaces/httpResponse.interface';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carousel!: Datum[];

  constructor() { }

  ngOnInit(): void {

    
  }

}
