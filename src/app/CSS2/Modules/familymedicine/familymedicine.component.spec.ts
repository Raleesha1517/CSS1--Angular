import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilymedicineComponent } from './familymedicine.component';

describe('FamilymedicineComponent', () => {
  let component: FamilymedicineComponent;
  let fixture: ComponentFixture<FamilymedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilymedicineComponent]
    });
    fixture = TestBed.createComponent(FamilymedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
