import { Component, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from '../common/jquery.service';
import { KENDO_TOKEN } from '../common/kendo.service';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.scss']
})
export class CreatePdfComponent implements OnInit {

  private el: HTMLElement;
  // tslint:disable-next-line:no-input-rename
  @Input('modal-trigger') modalId: string;

  constructor(
    ref: ElementRef,
    @Inject(JQUERY_TOKEN) private $: any,
    @Inject(KENDO_TOKEN) private kendo: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
  }

  createPDF(selector) {
    let page = this.$(selector);
    if (page && page.length > 0) {
      const drawing = this.kendo.drawing;
      drawing.drawDOM(page).then(function (group) {
        drawing.pdf.saveAs(group, 'RolloverAnalysis.pdf');
      });
    }
  }
}
