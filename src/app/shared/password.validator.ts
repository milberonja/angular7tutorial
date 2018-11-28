import { AbstractControl } from '@angular/forms';


export function PasswordValidator(control: AbstractControl): {[key:string] : boolean} | null {
    const password = control.get('password');
    const confPass = control.get('confPass');

    if(password.pristine || confPass.pristine){
        return null;
    }

    return password && confPass && password.value != confPass.value ? {'misMatch': true} : null;
}