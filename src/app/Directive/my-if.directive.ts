import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef: TemplateRef<any>) {

  }

}
