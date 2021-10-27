import { Component, OnInit } from '@angular/core';

/** Interface momentanea */
interface Slides {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousel: Slides[] = [
    {
      title: 'Primer slide',
      description: 'Esta descripción pertenece al primer slide.',
      image: 'assets/slides1.jpg'
    },
    {
      title: 'Segundo slide',
      description: 'Esta descripción pertenece al segundo slide.',
      image: 'assets/slides2.jpg'
    },
    {
      title: 'Tercer slide',
      description: 'Esta descripción pertenece al tercer slide',
      image: 'assets/slides3.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
