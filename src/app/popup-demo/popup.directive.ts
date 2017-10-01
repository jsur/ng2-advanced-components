import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})

export class PopupDirective {
  @Input() message: string;

  constructor(_elementRef: ElementRef) {
    console.log('Directive bound');
    console.log(_elementRef);
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }

}