import { FormGroup } from '@angular/forms';
export function passwordMatchValidator(g: FormGroup) {
    return g.get('Password')?.value === g.get('ConfirmPassword')?.value
        ? null : { 'mismatch': true };
}