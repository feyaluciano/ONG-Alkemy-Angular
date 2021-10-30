import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Member } from 'src/app/features/public/models/Member';
import { ImageFile } from 'src/app/features/public/models/ImageFile';
import { environment } from 'src/environments/environment';
import Swal from'sweetalert2';

@Component({
  selector: "app-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})
export class MemberFormComponent implements OnInit {
  public form: FormGroup;
  public editing: boolean = false;
  public sending: boolean = false;
  public action: string = "";
  public aMember: Member = {};
  private alertMessage!: String;
  public textEditor!: string;

  private imageFile!: ImageFile;
  public imageError = false;
  public anImage!: string;

  constructor(
    private _builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private ckeditorSvc: CkeditorService
  ) {
    this.form = this._builder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: [""],
      image: ["", [Validators.required]],
      facebookUrl: [
        "",
        [
          Validators.required,
          Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/),
        ],
      ],
      linkedinUrl: [
        "",
        [
          Validators.required,
          Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/),
        ],
      ],
    });
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.form.get(input)?.hasError(type) && this.form.get(input)?.touched
    );
  }

  savePut(member: Member) {
    this.alertMessage = "El miembro fue editado correctamente";
    member.id = this.aMember.id;
    member.image = this.anImage;
    this.httpService
      .put(environment.apiUrl + "/members/" + this.aMember.id, member)
      .subscribe((result) => {
        Swal.fire(this.alertMessage.toString()).then(() => {
          this.router.navigate(["/dashboard"]);
        });
      });
  }

  savePost(member: Member) {
    this.alertMessage = "El miembro fue agregado correctamente";
    this.aMember.id = "0";
    this.aMember.image = this.anImage;
    this.httpService
      .post(environment.apiUrl + "/members", member)
      .subscribe((result) => {
        let resultData: any = JSON.parse(JSON.stringify(result));
        this.alertMessage = resultData.message;
        Swal.fire(this.alertMessage.toString()).then(() => {
          this.router.navigate(["/dashboard"]);
        });
      });
  }

  save() {
    if (this.form.valid && !this.imageError) {
      this.sending = true;
      let member: Member = {
        name: this.form.get("name")?.value,
        image: this.anImage,
        description: this.textEditor,
        facebookUrl: this.form.get("facebookUrl")?.value,
        linkedinUrl: this.form.get("linkedinUrl")?.value,
      };
      if (this.editing) {
        this.savePut(member);
      } else {
        this.savePost(member);
      }
    } else {
      this.sending = false;
      this.form.markAllAsTouched();
      this.alertMessage = "Por favor complete los campos requeridos";
      Swal.fire(this.alertMessage.toString()).then(() => {});
    }
  }

  loadEntity() {
    this.editing = true;
    this.action = "Edit Member";
    const url: string =
      environment.apiUrl + "/members/" + this.route.snapshot.params["idMember"];
    this.httpService.get(url).subscribe((result) => {
      let resultData: any = JSON.parse(JSON.stringify(result));
      this.aMember = JSON.parse(JSON.stringify(resultData.data));
      this.ckeditorSvc.textEditor$.next(this.aMember.description!);
      this.form.get("name")!.setValue(this.aMember.name);
      this.form.get("facebookUrl")!.setValue(this.aMember.facebookUrl);
      this.form.get("linkedinUrl")!.setValue(this.aMember.linkedinUrl);
    });
  }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params["idMember"] !== "undefined") {
      this.loadEntity();
    } else {
      this.editing = false;
      this.action = "New Member";
    }

    this.ckeditorSvc.getHandlerTextEditor$().subscribe((text) => {
      this.textEditor = text;
    });
  }

  //------------------------------------------------upload image----------------------------------------------------
  fileEvent(event: any) {
    this.imageFile = { id: "0" };
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (file.type != "image/jpeg" && file.type != "image/png") {
        this.imageError = true;
        return false;
      }

      if (file.type != "image/jpeg" && file.type != "image/png") {
        this.imageError = true;
        return false;
      }

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.anImage =
          "data:image/png;base64," + reader.result!.toString().split(",")[1];
        var img = new Image();
        img.addEventListener(
          "load",
          function () {
            var formElement = <HTMLFormElement>(
              document.getElementById("imageError")
            );
            // if (( img.width !== 590) || ( img.height !== 340) )    {
            //   formElement.value="true";
            // } else {
            //   formElement.value="false";
            // }
          },
          false
        );

        img.src = this.anImage;
        this.imageFile.imageFile = reader.result!.toString().split(",")[1];
      };
    }
    return true;
  }

  //------------------------------------------------end upload image----------------------------------------------------
}
