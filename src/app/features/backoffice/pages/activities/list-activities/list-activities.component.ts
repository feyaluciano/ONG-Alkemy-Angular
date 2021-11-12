import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/features/models/Activity';
import { HTTPResponse } from 'src/app/features/models/HTTPResponse';
import { ActivitiesService } from 'src/app/features/services/activities/activities.service';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';
import { environment } from 'src/environments/environment';

//import * as ActionsActivities from 'src/app/features/state/activities.actions.ts';






import { Store, select } from '@ngrx/store';
import  *  as ActionsActivities from 'src/app/core/state/activities/activities.actions';
import { listActivities } from 'src/app/core/state/activities/activities.selector';
//import { invokeActivityAPI } from 'src/app/features/state/activities/activities.actions';



@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  public listActivities:Activity[] = [];
  displayedColumns: string[] = ['Id', 'Titulo', 'Descripcion'];


  public tarea2: Activity = {
    id: '2',
    name: '22222la actividad 1',
    description: '2222la descrtppp'
  }


  //preguntar ????????????? COMO hacer esto sin selector, ya que se trae todas las activiadaes del store, se debe traer y clonar el array? o como?
  
  // allActivities$ = this.store.pipe(
  //   select(listActivities())
  // ).subscribe(result=>{    
  //     this.listActivities=result;
  //  });

// allActivities$ = this.store.pipe(
//   select(listActivities())
// );


//Onjecto el store y me
  constructor(private activitiesService:ActivitiesService,public dialog: MatDialog, 
    private store: Store<{ activities: Activity[] }>,) {
      
     }

    

    addActivity() {
      this.store.dispatch(new ActionsActivities.AddActivity(this.tarea2) )
    }


  ngOnInit() {


    this.store.select('activities').subscribe(result=>{    
           this.listActivities=result;
    });

    this.store.dispatch(new ActionsActivities.GetActivities() )

    //this.store.dispatch(ActivitiesActions.)

    //this.store.dispatch({});


    //Aqui se trae todas las actividades de la api y las guarda en el store, al ejecutar la accion invokeActivityAPI(),
    // y en la linea allActivities$ = this.store.pipe(.... al estar subsripto a este observable, se actualiza el array de actividades
    // 
    //this.store.dispatch(invokeActivityAPI());    
    
    
    
    
    
    
    //EL SIGUIENTE CODIGO ES EL QUE OBTENIA LOS DATOS DE LA API, Y NO DEL STORE
    // const url: string =
    // environment.activitiesApiUrl;  
    // const req:Observable<HTTPResponse<any>>= this.activitiesService.getActivities(url); 
    //     req.subscribe((response) => {
    //       let resultData: HTTPResponse<Activity> = response;         
    //       this.listActivities = JSON.parse(JSON.stringify(resultData.data));                           
    //     },
    //     (error)=>{
    //       let errorMessage="";           
    //         switch(error.status) { 
    //           case 404: { 
    //             errorMessage="Error al obtener la actividad"; 
    //              break; 
    //           } 
    //           case 401: {  
    //             errorMessage="Usted no esta autorizado para acceder a este recurso";
    //              break; 
    //           } 
    //           default: { 
    //             errorMessage="Error desconocido";
    //              break; 
    //           } 
    //        }    
          
    //        let dialogRef = this.dialog.open(StandarDialogComponent, {
    //         height: '300px',
    //         width: '400px',
    //         data: {type: "error", titleToShow:"",messageToShow: errorMessage,showButtonsOkCancel:false},
    //       });            
    //       dialogRef.afterClosed().subscribe(result => {
    //         console.log(`if it is ok, the user press accept: ${result}`); 
    //       });            
    //     }
    //     );    
  }

}
