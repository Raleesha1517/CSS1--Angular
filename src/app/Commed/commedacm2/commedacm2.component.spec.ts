import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commedacm2Component } from './commedacm2.component';

describe('Commedacm2Component', () => {
  let component: Commedacm2Component;
  let fixture: ComponentFixture<Commedacm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Commedacm2Component]
    });
    fixture = TestBed.createComponent(Commedacm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
