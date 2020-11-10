import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPageHeader]'
})
export class PageHeaderDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontSize = '26px';
    el.nativeElement.style.textAlign = 'center';

  }
}
