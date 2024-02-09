import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliativeComponent } from './palliative.component';

describe('PalliativeComponent', () => {
  let component: PalliativeComponent;
  let fixture: ComponentFixture<PalliativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalliativeComponent]
    });
    fixture = TestBed.createComponent(PalliativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
