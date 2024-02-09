import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicobatsComponent } from './medicobats.component';

describe('MedicobatsComponent', () => {
  let component: MedicobatsComponent;
  let fixture: ComponentFixture<MedicobatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicobatsComponent]
    });
    fixture = TestBed.createComponent(MedicobatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
