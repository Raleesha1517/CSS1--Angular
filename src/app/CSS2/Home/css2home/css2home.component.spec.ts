import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Css2homeComponent } from './css2home.component';

describe('Css2homeComponent', () => {
  let component: Css2homeComponent;
  let fixture: ComponentFixture<Css2homeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Css2homeComponent]
    });
    fixture = TestBed.createComponent(Css2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
