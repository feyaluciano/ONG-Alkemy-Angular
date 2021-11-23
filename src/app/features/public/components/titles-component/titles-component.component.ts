import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-titles-component",
  templateUrl: "./titles-component.component.html",
  styleUrls: ["./titles-component.component.scss"],
})
export class TitlesComponentComponent implements OnInit {

  @Input() title!: string | undefined;
  @Input() image!: string | undefined;

  public defaultImage: string = "../assets/images/lapices4.png";

  constructor() {}

  ngOnInit(): void {

    if (!Boolean(this.image)) {      
      this.image = this.defaultImage;
    }

  }
}
