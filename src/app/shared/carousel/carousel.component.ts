import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'src/app/features/public/models/carousel.interface';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carousel!: Carousel[];

  constructor() { }

  ngOnInit(): void {

    
  }

}
