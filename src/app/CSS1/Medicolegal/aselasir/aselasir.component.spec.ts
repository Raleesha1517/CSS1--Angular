import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AselasirComponent } from './aselasir.component';

describe('AselasirComponent', () => {
  let component: AselasirComponent;
  let fixture: ComponentFixture<AselasirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AselasirComponent]
    });
    fixture = TestBed.createComponent(AselasirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
