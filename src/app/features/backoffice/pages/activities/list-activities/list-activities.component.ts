import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, Subscription } from "rxjs";
import { Activity } from "src/app/features/models/Activity";
import { ActivitiesService } from "src/app/features/services/activities/activities.service";
import { Store } from "@ngrx/store";
import * as activitiesActions from "src/app/core/state/activities/activities.actions";
import * as activitySelector from "src/app/core/state/activities/activities.selector";
import { tap } from "rxjs/operators";

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
    this.store.dispatch(activitiesActions.deleteActivity({ id }));
  }

  ngOnInit() {
    this.activitiesStore$ = this.store
      .select(activitySelector.selectAllActivities)
      .pipe(tap((res) => console.log(res)))
      .subscribe((activities) => {
        this.listActivities = activities;
      });

    // Ejecuto el action para que cargue las actividades
    this.store.dispatch(activitiesActions.findAllActivities());
  }
}
