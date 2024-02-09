import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspehomeComponent } from './ospehome.component';

describe('OspehomeComponent', () => {
  let component: OspehomeComponent;
  let fixture: ComponentFixture<OspehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OspehomeComponent]
    });
    fixture = TestBed.createComponent(OspehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
