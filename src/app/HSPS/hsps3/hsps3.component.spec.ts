import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hsps3Component } from './hsps3.component';

describe('Hsps3Component', () => {
  let component: Hsps3Component;
  let fixture: ComponentFixture<Hsps3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hsps3Component]
    });
    fixture = TestBed.createComponent(Hsps3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
