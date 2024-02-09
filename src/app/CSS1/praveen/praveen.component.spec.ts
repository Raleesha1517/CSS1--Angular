import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraveenComponent } from './praveen.component';

describe('PraveenComponent', () => {
  let component: PraveenComponent;
  let fixture: ComponentFixture<PraveenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraveenComponent]
    });
    fixture = TestBed.createComponent(PraveenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
