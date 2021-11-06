import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivitiesService } from '../../../services/activities/activities.service';
import { Activity } from '../../../models/Activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public title: string = 'Actividades';
  public activities: Activity[] = [];

  constructor(
    private activitiesService: ActivitiesService
  ) {
    this.activitiesService.getActivities('/activities')
      .subscribe((data: any) => {
        Swal.fire({
          title: 'Hecho!',
          text: data.message,
          icon: 'success',
          showConfirmButton: true,
          timer: 2000
        });

        this.activities = data.data;
      });
  }

  ngOnInit(): void {
  }

  viewDescription(id: number) {
    let element = document.getElementById('album' + id);
    if (element?.classList.contains('collapse')) {
      element.classList.remove('collapse');
    } else {
      element?.classList.add('collapse');
    }
  }

}
