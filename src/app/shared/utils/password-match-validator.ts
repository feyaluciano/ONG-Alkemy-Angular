import { FormGroup } from '@angular/forms';
export function passwordMatchValidator(g: FormGroup) {
    alert(g.get('Password')?.value);
    alert(g.get('ConfirmPassword')?.value)
    return g.get('Password')?.value === g.get('ConfirmPassword')?.value
        ? null : { 'mismatch': true };
}