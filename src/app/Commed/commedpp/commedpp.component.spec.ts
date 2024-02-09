import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommedppComponent } from './commedpp.component';

describe('CommedppComponent', () => {
  let component: CommedppComponent;
  let fixture: ComponentFixture<CommedppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommedppComponent]
    });
    fixture = TestBed.createComponent(CommedppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
