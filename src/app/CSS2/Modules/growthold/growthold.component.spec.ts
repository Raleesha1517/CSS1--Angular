import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowtholdComponent } from './growthold.component';

describe('GrowtholdComponent', () => {
  let component: GrowtholdComponent;
  let fixture: ComponentFixture<GrowtholdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrowtholdComponent]
    });
    fixture = TestBed.createComponent(GrowtholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
