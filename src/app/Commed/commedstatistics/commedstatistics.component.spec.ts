import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommedstatisticsComponent } from './commedstatistics.component';

describe('CommedstatisticsComponent', () => {
  let component: CommedstatisticsComponent;
  let fixture: ComponentFixture<CommedstatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommedstatisticsComponent]
    });
    fixture = TestBed.createComponent(CommedstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
