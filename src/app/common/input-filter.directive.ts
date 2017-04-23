import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myInputFilter]'
})
export class InputFilterDirective implements OnInit, OnDestroy {

  private el: HTMLInputElement;

  // tslint:disable-next-line:no-input-rename
  @Input('myInputFilter') expression: string;

  constructor(
    private ref: ElementRef
  ) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {

    this.el.addEventListener('keydown', e => {

      const allNumbers = '0123456789';
      const allLowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const allUpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const specialChars = '`~!@#$%^&*()-_=+[]{}\|;:\'\",./<>?';
      const allowSpace = ' ';

      const key = e.keyCode;

      if (key === 8 || key === 9 || key === 46 || (key > 32 && key < 41 || key === 0)) {
        // Allow non-character keys through
      }
      // tslint:disable-next-line:one-line
      else {
        const isAllowed = this.validateCharacter(e.key);
        if (isAllowed) {
          // Allow through
          console.log('key = ' + e.key);
        }
        // tslint:disable-next-line:one-line
        else {
          e.returnValue = false;
        }
      }
    });

    this.el.addEventListener('paste', e => {
      const data = e.clipboardData.getData('text/plain');
      console.log(data);
      e.returnValue = false;
      const newValue = this.removeIllegalCharacters(data);
      this.el.value = newValue;
    });
  }

  ngOnDestroy() {
    this.el.removeEventListener('keydown');
    this.el.removeEventListener('paste');
  }

  validateCharacter(input) {
    const exp = new RegExp(this.expression);
    const isAllowed = exp.test(input);
    return isAllowed;
  }

  removeIllegalCharacters(input: string) {
    let newValue = '';
    for (let i = 0; i < input.length; i++) {
      const c = input.charAt(i);
      const isAllowed = this.validateCharacter(c);
      if (isAllowed) {
        newValue += c;
      }
    }
    return newValue;
  }
}
