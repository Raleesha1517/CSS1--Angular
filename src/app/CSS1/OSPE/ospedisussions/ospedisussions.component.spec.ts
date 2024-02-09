import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspedisussionsComponent } from './ospedisussions.component';

describe('OspedisussionsComponent', () => {
  let component: OspedisussionsComponent;
  let fixture: ComponentFixture<OspedisussionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OspedisussionsComponent]
    });
    fixture = TestBed.createComponent(OspedisussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
