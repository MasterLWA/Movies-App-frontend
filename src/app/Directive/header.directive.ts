import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = "yellow";
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.align = "center";
  }

}
