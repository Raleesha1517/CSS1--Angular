import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetanleComponent } from './timetanle.component';

describe('TimetanleComponent', () => {
  let component: TimetanleComponent;
  let fixture: ComponentFixture<TimetanleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimetanleComponent]
    });
    fixture = TestBed.createComponent(TimetanleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
