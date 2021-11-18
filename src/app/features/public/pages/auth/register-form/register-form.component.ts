import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserStatusService } from "src/app/core/services/user-status.service";
import { User } from "../../../../models/User";
import { MatDialog } from '@angular/material/dialog';
import { StandarDialogComponent } from "src/app/shared/components/standar-dialog/standar-dialog.component";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  editing: boolean = false;
  passwordsAreEqualValue: boolean = false;
  termsOk: boolean = false;
  
  constructor(
    private userStatusService: UserStatusService,
    private _builder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.form = this._builder.group({
      email: ["ejemplo@gmail.com", [Validators.required, Validators.email]],
      password: [
        "aaaaaa5%",
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/
          ),
        ],
      ],
      confirmPassword: ["aaaaaa5%", [Validators.required]],
    });
  }


  haveErrorsInputForm(input:string,type:string){    
    return Boolean (this.form.get(input)?.hasError(type) && this.form.get(input)?.touched)    
  }

  passwordsAreEqual() {
    if (
      this.form.get("password")?.value ===this.form.get("confirmPassword")?.value
    ) {
      return true;
    }
    return false;
  }

  async save() {

    if (this.termsOk === false) {
      let dialogRef = this.dialog.open(StandarDialogComponent, {
        height: '300px',
        width: '400px',
        data: {type: "noTerms", titleToShow:"",messageToShow: "Debe leer y aceptar los términos y condiciones de la ONG",showButtonsOkCancel:false},
      });            
      dialogRef.afterClosed().subscribe(result => { });
    }
    
    this.passwordsAreEqualValue = !this.passwordsAreEqual();
    if (this.form.valid && this.passwordsAreEqual() && this.termsOk) {
      const user: User = {
        email: this.form.get("email")?.value,
        password: this.form.get("password")?.value,
      };
      await this.userStatusService.setUser(user);      
      this.router.navigate(["/dashboard"]);
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.editing = false;
  }

  readTerms() {
    let dialogRef = this.dialog.open(StandarDialogComponent, {
      height: '80vh',
      width: '60%',
      data: {type: "terms", titleToShow:"",messageToShow: "",showButtonsOkCancel:false},
    });            
    dialogRef.afterClosed().subscribe(result => {
      this.termsOk = result === 'cancelTerms' || !result ? false : true; 
    });
  }
}
