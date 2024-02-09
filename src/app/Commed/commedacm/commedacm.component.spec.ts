import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommedacmComponent } from './commedacm.component';

describe('CommedacmComponent', () => {
  let component: CommedacmComponent;
  let fixture: ComponentFixture<CommedacmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommedacmComponent]
    });
    fixture = TestBed.createComponent(CommedacmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
