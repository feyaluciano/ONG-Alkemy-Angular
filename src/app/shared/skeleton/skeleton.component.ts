import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  // Appareance
  // types of skeletons
  // Ex: line - circle -  

  // Ex: 10 items - 10 line
  @Input() count: number = 10;

  @Input() loader: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
