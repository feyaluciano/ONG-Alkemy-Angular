import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { Activity } from 'src/app/features/public/models/Activity';
import { UrlImageValidator } from 'src/app/shared/utils/url-image.validator';
import { environment } from 'src/environments/environment';
import Swal from'sweetalert2';


@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  public form: FormGroup;
  public editing: boolean = false;
  public sending: boolean = false;
  public action: string = "";
  public anActivity: Activity = {};
  private alertMessage!: String;
  public textEditor!:string;

  

  constructor(
    private userStatusService: UserStatusService,
    private _builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private ckeditorSvc: CkeditorService
  ) {
    this.form = this._builder.group({
      name: ["", [Validators.required]],
      description: ["",],
      image: ["", [Validators.required]],

    });
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.form.get(input)?.hasError(type) && this.form.get(input)?.touched
    );
  }

  save() {
    //WITH DE CUSTOM VALIDATION TO IMAGE URL, THE FORM IS ALLWAYS INVALID, CHECK!
    if (this.form.valid) {
      this.sending = true;      
      let activity: Activity = {
        name: this.form.get("name")?.value,
        image: this.form.get("image")?.value,
        description: this.textEditor,
      };
      if (this.editing) {
        this.alertMessage = "La actividad fue editada correctamente";
        activity.id = this.anActivity.id;
        this.httpService
          .put(
            environment.apiUrl + "/activities/" + this.anActivity.id,
            activity
          )
          .subscribe((result) => {
            let resultData: any = JSON.parse(JSON.stringify(result));
            Swal.fire(this.alertMessage.toString()).then(() => {
              this.router.navigate(["/dashboard"]);
            });
          });
      } else {
        this.alertMessage = "La actividad fue agregada correctamente";
        this.anActivity.id = "0";
        this.httpService
          .post(environment.apiUrl + "/activities", activity)
          .subscribe((result) => {
            let resultData: any = JSON.parse(JSON.stringify(result));
            this.alertMessage = resultData.message;
            Swal.fire(this.alertMessage.toString()).then(() => {
              this.router.navigate(["/dashboard"]);
            });
          });
      }
    } else {
      this.sending = false;
      this.form.markAllAsTouched();
      this.alertMessage = "Por favor complete los campos requeridos";
      Swal.fire(this.alertMessage.toString()).then(() => {});
    }
  }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params["idActivity"] !== "undefined") {
      this.editing = true;
      this.action = "Edit activity";
      const url: string =
        environment.apiUrl +
        "/activities/" +
        this.route.snapshot.params["idActivity"];
      this.httpService.get(url).subscribe((result) => {
        let resultData: any = JSON.parse(JSON.stringify(result));
        this.anActivity = JSON.parse(JSON.stringify(resultData.data));
        this.ckeditorSvc.textEditor$.next(this.anActivity.description!)
        this.form.setValue({
          name: this.anActivity.name,
          image: this.anActivity.image,
          description: this.anActivity.description,
        });
      });
    } else {
      this.editing = false;
      this.action = "New activity";
    }

    this.ckeditorSvc.getHandlerTextEditor$().subscribe((text) => {
      this.textEditor=text;
    });
  }
  
}
