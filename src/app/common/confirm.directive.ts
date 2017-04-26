import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  @Input() confirmMessage = 'Are you sure you want to do this?';
  @Input() appConfirm = () => {};

  constructor() {}

  @HostListener('click', ['$event'])
  confirmFirst() {
    const confirmed = window.confirm(this.confirmMessage);

    if(confirmed) {
      this.appConfirm();
    }
  }
}

/*

@Component({
  selector: 'app-visit-rangle',
  template: `
    <button
      type="button"
      [appConfirm]="visitRangle"
      confirmMessage="Click ok to visit Rangle.io!">
      Visit Rangle
    </button>
  `
})
export class VisitRangleComponent {
  visitRangle() {
    location.href = 'https://rangle.io';
  }
}

*/

// https://angular-2-training-book.rangle.io/handout/advanced-angular/directives/creating_an_attribute_directive.html