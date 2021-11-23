import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() value: number = 50; // When mode is set to 'determinated', specify the percentage and is required
  @Input() diameter: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
