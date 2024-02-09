import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionbatsComponent } from './nutritionbats.component';

describe('NutritionbatsComponent', () => {
  let component: NutritionbatsComponent;
  let fixture: ComponentFixture<NutritionbatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionbatsComponent]
    });
    fixture = TestBed.createComponent(NutritionbatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
