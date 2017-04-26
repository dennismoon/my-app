import { TestBed, inject } from '@angular/core/testing';

import { ElementResizeService } from './element-resize.service';

describe('ElementResizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementResizeService]
    });
  });

  it('should ...', inject([ElementResizeService], (service: ElementResizeService) => {
    expect(service).toBeTruthy();
  }));
});
