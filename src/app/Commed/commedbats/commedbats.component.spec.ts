import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommedbatsComponent } from './commedbats.component';

describe('CommedbatsComponent', () => {
  let component: CommedbatsComponent;
  let fixture: ComponentFixture<CommedbatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommedbatsComponent]
    });
    fixture = TestBed.createComponent(CommedbatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
