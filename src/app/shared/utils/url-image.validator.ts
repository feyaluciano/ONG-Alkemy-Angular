

import { FormControl } from "@angular/forms";
import { isUrlImage } from 'src/app/shared/utils/utils-function';
export class UrlImageValidator {
  static urlValidate(control: FormControl) {
    let isValid = isUrlImage(control.value,[".jpg",".png",".jpeg"])
    if (isValid)
      return  null 
    else
      return { isurlimage: true }
  }
}