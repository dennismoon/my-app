import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
// import { JQUERY_TOKEN } from './jquery.service';

declare var jQuery: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss']
})
export class InfoButtonComponent implements OnInit {

  @Input() elementId: string;
  @Input() title: string;
  @Input() content: string;
  @ViewChild('infobutton') containerEl: ElementRef;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let infoButton = jQuery(this.containerEl.nativeElement);
    if (infoButton && infoButton.length > 0) {
      console.log(this.elementId);
      infoButton.popover({
        placement: 'top',
        trigger: 'focus',
        title: this.title,
        html: true,
        content: this.content
      });
    }
  }
}
