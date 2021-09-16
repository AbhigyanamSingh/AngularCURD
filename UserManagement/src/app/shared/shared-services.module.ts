import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyCharacterDirective } from './directive/only-character.directive';
import { PhoneValidationDirective } from './directive/phone-validation.directive';
import { IntegerDirective } from './directive/integer.directive';
import { EmailValidationDirective } from './directive/email-validation.directive';
import { NumberCharacterDirective } from './directive/number-character.directive';
import { AllowNumberOnlyDirective } from './directive/allow-number-only.directive';

@NgModule({
  declarations: [OnlyCharacterDirective,
    PhoneValidationDirective,
  IntegerDirective,
  EmailValidationDirective,
  NumberCharacterDirective,
  AllowNumberOnlyDirective],
  imports: [CommonModule],
  exports: [OnlyCharacterDirective,
  PhoneValidationDirective,
IntegerDirective,
EmailValidationDirective,
NumberCharacterDirective,
AllowNumberOnlyDirective],
  providers: []
})
export class SharedServicesModule {}
