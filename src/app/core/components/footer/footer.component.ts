import { Component, OnInit } from "@angular/core";
import { User } from "src/app/features/public/models/User";
import { UserStatusService } from "../../services/user-status.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  public user!: User;
  constructor(private userStatusService: UserStatusService) {    
  }

  async ngOnInit(): Promise<void> { 
    this.user = await this.userStatusService.getUser();  
  }
}
