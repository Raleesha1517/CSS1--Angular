import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionoldComponent } from './nutritionold.component';

describe('NutritionoldComponent', () => {
  let component: NutritionoldComponent;
  let fixture: ComponentFixture<NutritionoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionoldComponent]
    });
    fixture = TestBed.createComponent(NutritionoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
