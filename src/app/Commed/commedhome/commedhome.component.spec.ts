import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommedhomeComponent } from './commedhome.component';

describe('CommedhomeComponent', () => {
  let component: CommedhomeComponent;
  let fixture: ComponentFixture<CommedhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommedhomeComponent]
    });
    fixture = TestBed.createComponent(CommedhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
