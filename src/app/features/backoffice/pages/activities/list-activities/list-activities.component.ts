import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, Subscription } from "rxjs";
import { Activity } from "src/app/features/models/Activity";
import { HTTPResponse } from "src/app/features/models/HTTPResponse";
import { ActivitiesService } from "src/app/features/services/activities/activities.service";
import { StandarDialogComponent } from "src/app/shared/components/standar-dialog/standar-dialog.component";
import { environment } from "src/environments/environment";

import { Store, select } from "@ngrx/store";
//import  {addActivity,invokeActivityAPI,removeActivity }   from 'src/app/core/state/activities/activities.actions';
//import { listActivities } from 'src/app/core/state/activities/activities.selector';

import * as activitiesActions from "src/app/core/state/activities/activities.actions";
import { ActivityState } from "src/app/core/state/activities/activity.state";

import * as activitySelector from "src/app/core/state/activities/activities.selector";

@Component({
  selector: "app-list-activities",
  templateUrl: "./list-activities.component.html",
  styleUrls: ["./list-activities.component.scss"],
})
export class ListActivitiesComponent implements OnInit {
  public listActivities: Activity[] = [];
  displayedColumns: string[] = ["Id", "Titulo", "Descripcion"];

  private activitiesStore$!: Subscription;

  constructor(
    private activitiesService: ActivitiesService,
    public dialog: MatDialog,
    public store: Store<{ activities: any }>
  ) {}

  public tarea2: Activity = {
    id: "2",
    name: "22222la actividad 1",
    description: "2222la descrtppp",
  };

  addActivity() {
    this.store.dispatch(
      activitiesActions.createActivity({ payloadActivity: this.tarea2 })
    );
  }

  removeActivity(id: string) {
    //const activityToDelete: Activity = { id };
    //this.store.dispatch(removeActivity(activityToDelete));
  }

  ngOnInit() {
    this.activitiesStore$ = this.store
      //.select(activitySelector.selectAllActivities)
      .subscribe((activities) => {   
        //alert(JSON.stringify(activities))    
        let stateActual:ActivityState=JSON.parse(JSON.stringify(activities));
        let actividades=JSON.parse(JSON.stringify(stateActual))        
        this.listActivities = JSON.parse(JSON.stringify(actividades.Activities.actividades));         
      });
    // Ejecuto el action para que cargue las actividades
    this.store.dispatch(activitiesActions.findAllActivities());
  }
}
