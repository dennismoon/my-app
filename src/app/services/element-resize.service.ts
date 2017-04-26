import { Injectable, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class ElementResizeService {

  private el: HTMLElement;
  height$: Observable<number>;
  width$: Observable<number>;

  constructor(private ref: ElementRef) {

    this.el = ref.nativeElement;

    const elementSize$ = new BehaviorSubject(this.getElementSize());

    this.height$ = (elementSize$.pluck('height') as Observable<number>).distinctUntilChanged();

    this.width$ = (elementSize$.pluck('width') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(window, 'resize')
      .map(this.getElementSize)
      .subscribe(elementSize$);
  }

  setTargetElement(ref: ElementRef) {
    this.ref = ref;
  }

  getElementSize() {

    let height = 0;
    let width = 0;

    if (this.el) {
      height = this.el.clientHeight;
      width = this.el.clientWidth;
    }

    return {
      height: height,
      width: width
    };
  }
}
