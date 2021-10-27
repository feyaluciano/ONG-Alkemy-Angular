import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() origin: String = "";
  

  @ViewChild("headerBackoffice", { static: true }) headerBackoffice!: TemplateRef<any>;
  @ViewChild("headerPublic", { static: true }) headerPublic!: TemplateRef<any>;
  @ViewChild(TemplateRef, { static: true }) template!: TemplateRef<any>;

  constructor(private route: ActivatedRoute) {}
  

  ngOnInit(): void {}
  ngAfterViewInit() {
    if (this.origin == "/home") {
      this.template = this.headerPublic;
    } else {
      this.template = this.headerBackoffice;
    }
  }
}
