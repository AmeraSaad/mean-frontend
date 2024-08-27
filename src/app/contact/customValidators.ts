import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { from } from "rxjs";

export class CustomValidatores{
  static passwordValidator():ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null =>
      {
        const value = control.value;
        if (!value){
          return null;
        }
        const hasNumber = /[0-9]/.test(value);
        const hasUpper = /[A-Z]/.test(value);
        const isVlaidlength = value.length>= 8 ;
        const hasLower = /[a-z]/.test(value);
        const passwordValid = hasNumber && hasUpper && hasLower && isVlaidlength ;
        return !passwordValid ? {passwordstrenght:true} : null;
      }
  }

}
