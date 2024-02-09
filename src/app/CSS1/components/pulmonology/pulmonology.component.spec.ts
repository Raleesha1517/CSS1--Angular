import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulmonologyComponent } from './pulmonology.component';

describe('PulmonologyComponent', () => {
  let component: PulmonologyComponent;
  let fixture: ComponentFixture<PulmonologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PulmonologyComponent]
    });
    fixture = TestBed.createComponent(PulmonologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
