import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberCharacter]',

})
export class NumberCharacterDirective {


  private regExp: RegExp = new RegExp(/[a-zA-Z0-9 ]+$/g);

  //new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  //(/^[1-9][0-9]{0,5}$/g);
  //pan/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/g

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

  constructor(private element: ElementRef) {
  }

  @HostListener('keydown', ['$event'])

  onKeyDown(event: KeyboardEvent) {

    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    let current: string = this.element.nativeElement.value;



    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.regExp)) {
      event.preventDefault();
    }
  }
}
