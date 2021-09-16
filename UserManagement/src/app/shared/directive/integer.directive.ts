import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInteger]'
})
export class IntegerDirective {
  private regExp: RegExp = new RegExp(/^\d*\.?\d*$/g);

  //new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  //(/^[1-9][0-9]{0,5}$/g);
  //pan/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/g

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home','ArrowLeft','ArrowRight','Delete'];

  constructor(private element: ElementRef) {
  }

  @HostListener('keydown', ['$event'])

  onKeyDown(event: KeyboardEvent) {

    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let e = <KeyboardEvent> event;
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }

    let current: string = this.element.nativeElement.value;

    

    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.regExp)) {
      event.preventDefault();
    }
  }
}