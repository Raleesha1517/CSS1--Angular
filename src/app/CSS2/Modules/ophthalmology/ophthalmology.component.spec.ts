import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OphthalmologyComponent } from './ophthalmology.component';

describe('OphthalmologyComponent', () => {
  let component: OphthalmologyComponent;
  let fixture: ComponentFixture<OphthalmologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OphthalmologyComponent]
    });
    fixture = TestBed.createComponent(OphthalmologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
