import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';
import { Activity } from '../../../../models/Activity';
import { ActivitiesService } from '../../../../services/activities/activities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activity!: Activity;
  activityError: boolean = false;
  activityCompleted: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private activitiesSvc: ActivitiesService,
    public dialog: MatDialog
  ) {
    const id = this.actRoute.snapshot.params['id'];
    this.activitiesSvc.getActivityById(id)
      .subscribe((resp: any) => {
        this.activity = resp.data;
      },
      (error: any) => {
        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al obtener la actividad'; 
              break; 
          } 
          case 401: {  
            errorMessage = 'Usted no esta autorizado para acceder a este recurso';
              break; 
          } 
          default: { 
            errorMessage = 'Error desconocido';
              break; 
          } 
        }

        const dialogRef = this.dialog.open(StandarDialogComponent, {
          height: '300px',
          width: '400px',
          data: {
            type: "error",
            titleToShow:"",
            messageToShow: errorMessage,
            showButtonsOkCancel: false
          },
        });            
        
        dialogRef.afterClosed().subscribe(result => {
          this.activityError = true; 
        });
      },
      () => {
        setTimeout(() => {
          this.activityCompleted = true;
        }, 500);
      });
  }

  ngOnInit(): void {
  }

}
