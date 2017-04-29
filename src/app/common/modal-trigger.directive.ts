import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from './jquery.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  private el: HTMLElement;
  // tslint:disable-next-line:no-input-rename
  @Input('modal-trigger') modalId: string;

  constructor(
    ref: ElementRef,
    @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      // tslint:disable-next-line:prefer-const
      let dialog = this.$(`#${this.modalId}`);
      if (dialog && dialog.length > 0) {
        dialog.modal({});
      }
    });
  }
}
