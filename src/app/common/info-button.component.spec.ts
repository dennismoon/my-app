import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonComponent } from './info-button.component';
import { JQUERY_PROVIDER } from '../common';

describe('InfoButtonComponent', () => {
  let component: InfoButtonComponent;
  let fixture: ComponentFixture<InfoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoButtonComponent
      ],
      providers: [
        JQUERY_PROVIDER
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
