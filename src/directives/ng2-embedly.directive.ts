import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[ng2Embedly]'
})
export class Ng2EmbedlyDirective {

  constructor(private el: ElementRef) {
    console.log('hello world from ng2embedly directive');
  }

}
