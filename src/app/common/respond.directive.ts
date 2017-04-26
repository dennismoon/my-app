import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[elementRespond]'
})
export class RespondDirective {

  private el: HTMLInputElement;

  // tslint:disable-next-line:no-input-rename
  @Input('elementRespond') expression: string;

  constructor(
    private ref: ElementRef
  ) {
    this.el = ref.nativeElement;
  }

}
