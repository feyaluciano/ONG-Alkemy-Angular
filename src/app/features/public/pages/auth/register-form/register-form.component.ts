import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserStatusService } from "src/app/core/services/user-status.service";
import { passwordMatchValidator } from "src/app/shared/utils/password-match-validator";
import { User } from "../../../models/User";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  editing: boolean = false;
  passwordsAreEqualValue: boolean = false;
  constructor(private userStatusService:UserStatusService,private _builder: FormBuilder, private router: Router) {
    this.form = this._builder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/
          ),
        ],
      ],
      confirmPassword: ["", [Validators.required]],
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

  save() {
    this.passwordsAreEqualValue = !this.passwordsAreEqual();
    if (this.form.valid && this.passwordsAreEqual()) {
      const user: User = {
        email: this.form.get("Email")?.value,
        password: this.form.get("Password")?.value,
      };
      this.userStatusService.setUser(user);      
      this.router.navigate(["/home"]);
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.editing = false;
  }
}
