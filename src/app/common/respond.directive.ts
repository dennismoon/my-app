import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[elementRespond]'
})
export class RespondDirective {

  private el: HTMLInputElement;
  height$: Observable<number>;
  width$: Observable<number>;

  // tslint:disable-next-line:no-input-rename
  @Input('elementRespond') expression: string;

  constructor(
    private ref: ElementRef
  ) {
    this.el = ref.nativeElement;

    const elementSize$ = new BehaviorSubject(this.getElementSize());

    this.height$ = (elementSize$.pluck('height') as Observable<number>).distinctUntilChanged();

    this.width$ = (elementSize$.pluck('width') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(window, 'resize')
      .map(this.getElementSize)
      .subscribe(elementSize$);
  }

  getElementSize() {

    const height = this.el.clientHeight;
    const width = this.el.clientWidth;

    return {
      height: height,
      width: width
    };
  }

}
