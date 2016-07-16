import {Directive, ElementRef} from '@angular/core';
import {OnChanges} from '@angular/core';
import {Input} from '@angular/core';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Ng2EmbedlyService} from '../services/ng2-embedly.service';

@Directive({
  selector: '[ng2Embedly]',
  providers: [
    Ng2EmbedlyService
  ]
})

export class Ng2EmbedlyDirective implements OnChanges {

  @Input() url: string;
  @Input() width: number;
  @Output() onEmpty: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private el: ElementRef, private embedly: Ng2EmbedlyService) {
    // console.log('hello world from ng2embedly directive');
    // console.log('el', el);
  }

  ngOnChanges(changes: SimpleChanges): any {
    // console.log('changes', changes['url'].currentValue);

    // this.embedly.embed(changes['url'].currentValue, this.width)
    //   .then((data) => {
    //     if (data.html) {
    //       this.el.nativeElement.innerHTML = data.html;
    //     } else {
    //       this.onEmpty.emit(data);
    //     }
    //   })
    //   .catch((data) => { this.onEmpty.emit({}); });
    // this.embedly.extract(changes['url'].currentValue)
    //   .then((data) => {
    //     if (data.html) {
    //       console.log('this');
    //       this.el.nativeElement.innerHTML = data.html;
    //     } else {
    //       console.log('or this');
    //       this.onEmpty.emit(data);
    //     }
    //   })
    //   .catch((data) => { this.onEmpty.emit({}); });
  }

}
