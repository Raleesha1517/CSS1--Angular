import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HspsppComponent } from './hspspp.component';

describe('HspsppComponent', () => {
  let component: HspsppComponent;
  let fixture: ComponentFixture<HspsppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HspsppComponent]
    });
    fixture = TestBed.createComponent(HspsppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
