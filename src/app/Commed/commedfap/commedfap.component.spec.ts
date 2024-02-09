import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommedfapComponent } from './commedfap.component';

describe('CommedfapComponent', () => {
  let component: CommedfapComponent;
  let fixture: ComponentFixture<CommedfapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommedfapComponent]
    });
    fixture = TestBed.createComponent(CommedfapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
