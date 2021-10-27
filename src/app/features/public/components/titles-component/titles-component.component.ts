import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-titles-component",
  templateUrl: "./titles-component.component.html",
  styleUrls: ["./titles-component.component.scss"],
})
export class TitlesComponentComponent implements OnInit {
  @Input() title!: string;
  @Input() image!: string;
  public defaultImage: string = "assets/images/background-text-defect.png";
  constructor() {}

  ngOnInit(): void {
    if (!Boolean(this.image)) {      
      this.image = this.defaultImage;
    }
  }
}
