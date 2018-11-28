import { AbstractControl, ValidatorFn } from "@angular/forms";

// Example how to make custom Validator if we already know what names should be forbidden

// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? {'forbidenName': {value: control.value}} : null;
// }


// Second aproach: Example how to make custom Validator if we already know what names should be forbidden.
// This aproach is easier for view template

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    }
}
