import {Component} from '@angular/core';
import {Ng2EmbedlyDirective} from './ng2-embedly.directive';

@Component({
  selector: 'ng2-embedly-component',
  template: `
    ng2 embedly component
  `,
  directives: [Ng2EmbedlyDirective]
})
export class Ng2EmbedlyComponent {

  constructor() {
    // console.log('hello world from ng2embedly component');
  }

}
