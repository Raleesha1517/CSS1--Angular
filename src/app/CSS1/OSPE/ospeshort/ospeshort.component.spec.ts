import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspeshortComponent } from './ospeshort.component';

describe('OspeshortComponent', () => {
  let component: OspeshortComponent;
  let fixture: ComponentFixture<OspeshortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OspeshortComponent]
    });
    fixture = TestBed.createComponent(OspeshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
