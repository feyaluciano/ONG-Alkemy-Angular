import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';
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
  activitiesCompleted: boolean = false;
  activitiesError: boolean = false;
  form!: FormGroup;


  constructor(
    private activitiesService: ActivitiesService,
    public dialog: MatDialog,
    private router: Router,
    private _builder: FormBuilder,
  ) {

    this.form = this._builder.group({      
      search_activity: ['', [Validators.required]],            
    });


    this.listActivity();

    
  }



  listActivity() {
    this.activitiesService.getActivities()
      .subscribe((data: any) => {
        this.activities = data.data;
        this.activitiesCompleted = true;
      }, (error) => {
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
        this.viewDialog(errorMessage);        
      });
  }

  searchActivity(text:string) {
    this.activitiesService.searchActivities(text)
      .subscribe((data: any) => {
        this.activities = data.data;
        this.activitiesCompleted = true;

        if (this.activities.length==0){          
            this.listActivity();          
        }

      }, (error) => {
        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al buscar las actividades'; 
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
        this.viewDialog(errorMessage);        
      });
  }



  viewDialog(errorMessage: string):void{
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
      this.activitiesError = true; 
    });
  }


  ngOnInit(): void {
    const obs: Subscription=this.form.valueChanges
    .pipe(debounceTime(1500))
    .subscribe(data => {         
      if (data.search_activity.length > 3) {
        this.activitiesCompleted=false;
        this.searchActivity(data.search_activity);                
      } 
    });           



  }

  activityDetail(id: string | undefined) {
    this.router.navigate(['/actividad', id]);
  }

}
