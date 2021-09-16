import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[OnlyCharacter]'
})
export class OnlyCharacterDirective {
  private regExp: RegExp = new RegExp(/^[a-zA-Z ]*$/g);

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home','ArrowLeft','ArrowRight','Delete'];
  

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
