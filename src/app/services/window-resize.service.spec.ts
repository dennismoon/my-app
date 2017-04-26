import { TestBed, inject } from '@angular/core/testing';

import { WindowResizeService } from './window-resize.service';

describe('WindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowResizeService]
    });
  });

  it('should ...', inject([WindowResizeService], (service: WindowResizeService) => {
    expect(service).toBeTruthy();
  }));
});
