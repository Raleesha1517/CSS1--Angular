import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicohomeComponent } from './medicohome.component';

describe('MedicohomeComponent', () => {
  let component: MedicohomeComponent;
  let fixture: ComponentFixture<MedicohomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicohomeComponent]
    });
    fixture = TestBed.createComponent(MedicohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
