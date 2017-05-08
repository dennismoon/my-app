import { ElementRef } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { ElementResizeService } from './element-resize.service';

describe('ElementResizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ElementRef,
        ElementResizeService
      ]
    });
  });

  it('should create', inject([ElementResizeService], (service: ElementResizeService) => {
    expect(service).toBeTruthy();
  }));
});
