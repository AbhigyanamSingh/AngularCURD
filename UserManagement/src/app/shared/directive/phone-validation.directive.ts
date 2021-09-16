import { Directive } from '@angular/core';

import {AbstractControl, FormGroup ,ValidatorFn, Validator, NG_VALIDATORS, Validators, FormControl} from "@angular/forms";

@Directive({
  selector: '[appPhoneValidation] [ngModel]',
  providers:[{provide: NG_VALIDATORS, useExisting: PhoneValidationDirective , multi: true}]
})
export class PhoneValidationDirective {
  validator: ValidatorFn;

  constructor() { 
    this.validator = this.appPhoneValidation();
  }
  validate(control: FormControl){
    return this.validator(control)
  }

  appPhoneValidation(){
    return ( control :FormControl) => {
      let isValid =/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(control.value);
      if(isValid){
        return null;
      }else{
        return{
          appPhoneValidation:{
            valid:false
          }
        };
      }
    };
  }
}
