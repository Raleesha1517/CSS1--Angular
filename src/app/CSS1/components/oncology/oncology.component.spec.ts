import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncologyComponent } from './oncology.component';

describe('OncologyComponent', () => {
  let component: OncologyComponent;
  let fixture: ComponentFixture<OncologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OncologyComponent]
    });
    fixture = TestBed.createComponent(OncologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
