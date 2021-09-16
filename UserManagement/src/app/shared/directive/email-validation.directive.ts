import { Directive } from '@angular/core';

import {AbstractControl, FormGroup ,ValidatorFn, Validator, NG_VALIDATORS, Validators, FormControl} from "@angular/forms"
@Directive({
  selector: '[appEmailValidation] [ngModel]',
  providers:[{provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true}]
})
export class EmailValidationDirective {
  validator: ValidatorFn;

  constructor() { 
    this.validator = this.appEmailValidation();
  }
  validate(control: FormControl){
    return this.validator(control)
  }

  appEmailValidation(){
    return ( control :FormControl) => {
      let isValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(control.value);
      if(isValid){
        return null;
      }else{
        return{
          appEmailValidation: {
            valid:false
          }
        };
      }
    }
  };


}
