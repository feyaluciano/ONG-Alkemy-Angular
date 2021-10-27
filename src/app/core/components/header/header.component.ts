import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/features/public/models/User';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() origin: String = "";

  @ViewChild("headerBackoffice", { static: true })
  headerBackoffice!: TemplateRef<any>;
  @ViewChild("headerPublic", { static: true }) headerPublic!: TemplateRef<any>;
  @ViewChild(TemplateRef, { static: true }) template!: TemplateRef<any>;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    let userTemp = JSON.parse(
      JSON.stringify(localStorage.getItem("userLogged"))
    );

    this.template = this.headerPublic;

    let user: User = JSON.parse(userTemp);
    if (user !== null) {
      this.template = this.headerBackoffice;
    }
  }
}
