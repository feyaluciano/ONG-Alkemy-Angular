import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StandarDialogComponent } from '../../../../shared/components/standar-dialog/standar-dialog.component';
import { Activity } from '../../../models/Activity';
import { ActivitiesService } from '../../../services/activities/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public title: string = 'Actividades';
  public activities: Activity[] = [];
  dialog!: MatDialog;
  activitiesCompleted: boolean = false;

  constructor(
    private activitiesService: ActivitiesService
  ) {
    this.activitiesService.getActivities()
      .subscribe((data: any) => {
        this.activities = data.data;
      },
      (error) => {
        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al obtener las actividades'; 
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
          console.log(`Dialog result: ${result}`); 
        });
      },
      () => {
        setTimeout(() => {
          this.activitiesCompleted = true;
        }, 500);
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
