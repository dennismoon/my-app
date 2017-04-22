import { TestBed, inject } from '@angular/core/testing';

import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateService]
    });
  });

  it('should create', inject([AppStateService], (service: AppStateService) => {
    expect(service).toBeTruthy();
  }));
});
