import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalsComponent } from './clinicals.component';

describe('ClinicalsComponent', () => {
  let component: ClinicalsComponent;
  let fixture: ComponentFixture<ClinicalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalsComponent]
    });
    fixture = TestBed.createComponent(ClinicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
