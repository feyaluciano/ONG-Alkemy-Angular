

import { FormControl, ValidationErrors } from "@angular/forms";
import { isUrlImage } from 'src/app/shared/utils/utils-function';
export class UrlImageValidator {
  static urlValidate(control: FormControl): ValidationErrors {
    let isValid = isUrlImage(control.value,[".jpg",".png",".jpeg"])
    if (isValid)
      return { isurlimage: null }
    else
      return { isurlimage: true }
  }
}