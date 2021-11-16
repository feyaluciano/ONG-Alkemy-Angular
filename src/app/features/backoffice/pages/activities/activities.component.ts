import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/features/models/Activity';
import { environment } from 'src/environments/environment';
import { PrivateBackofficeService } from '../../services/private-backoffice.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
loader:boolean = true;
totalCount:number = 10;
activities:Activity[] = [];
  constructor(private privateServices:PrivateBackofficeService) { 
  }

  ngOnInit() {

    this.privateServices.getEntities(environment.activitiesApiUrl).subscribe((resp:any)=>{
      this.activities = resp.data
    })
  }


}
