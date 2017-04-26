import { Component, OnInit } from '@angular/core';

import { WindowResizeService } from './services/window-resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'My App';
  innerHeight: number;
  innerWidth: number;
  outerHeight: number;
  outerWidth: number;
  bodyHeight: number;
  bodyWidth: number;

  constructor(
    private windowResizeService: WindowResizeService
  ) { }

  ngOnInit() {

    this.windowResizeService.innerHeight$.subscribe((value: any) => {
      this.innerHeight = value;
    });

    this.windowResizeService.innerWidth$.subscribe((value: any) => {
      this.innerWidth = value;
    });

    this.windowResizeService.outerHeight$.subscribe((value: any) => {
      this.outerHeight = value;
    });

    this.windowResizeService.outerWidth$.subscribe((value: any) => {
      this.outerWidth = value;
    });

    this.windowResizeService.bodyHeight$.subscribe((value: any) => {
      this.bodyHeight = value;
    });

    this.windowResizeService.bodyWidth$.subscribe((value: any) => {
      this.bodyWidth = value;
    });
  }
}
