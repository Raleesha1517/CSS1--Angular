import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommedresearchComponent } from './commedresearch.component';

describe('CommedresearchComponent', () => {
  let component: CommedresearchComponent;
  let fixture: ComponentFixture<CommedresearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommedresearchComponent]
    });
    fixture = TestBed.createComponent(CommedresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
