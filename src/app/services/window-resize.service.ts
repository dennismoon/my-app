import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Injectable()
export class WindowResizeService {

  innerHeight$: Observable<number>;
  innerWidth$: Observable<number>;
  outerHeight$: Observable<number>;
  outerWidth$: Observable<number>;
  bodyHeight$: Observable<number>;
  bodyWidth$: Observable<number>;

  constructor() {

    const windowSize$ = new BehaviorSubject(this.getWindowSize());

    this.innerHeight$ = (windowSize$.pluck('innerHeight') as Observable<number>).distinctUntilChanged();

    this.innerWidth$ = (windowSize$.pluck('innerWidth') as Observable<number>).distinctUntilChanged();

    this.outerHeight$ = (windowSize$.pluck('outerHeight') as Observable<number>).distinctUntilChanged();

    this.outerWidth$ = (windowSize$.pluck('outerWidth') as Observable<number>).distinctUntilChanged();

    this.bodyHeight$ = (windowSize$.pluck('bodyHeight') as Observable<number>).distinctUntilChanged();

    this.bodyWidth$ = (windowSize$.pluck('bodyWidth') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(window, 'resize')
      .map(this.getWindowSize)
      .subscribe(windowSize$);
  }

  getWindowSize() {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
      bodyHeight: document.body.clientHeight,
      bodyWidth: document.body.clientWidth
    };
  }
}
