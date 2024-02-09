import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqDiscussionsComponent } from './mcq-discussions.component';

describe('McqDiscussionsComponent', () => {
  let component: McqDiscussionsComponent;
  let fixture: ComponentFixture<McqDiscussionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McqDiscussionsComponent]
    });
    fixture = TestBed.createComponent(McqDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
