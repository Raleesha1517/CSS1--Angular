import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriactricsComponent } from './geriactrics.component';

describe('GeriactricsComponent', () => {
  let component: GeriactricsComponent;
  let fixture: ComponentFixture<GeriactricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeriactricsComponent]
    });
    fixture = TestBed.createComponent(GeriactricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
