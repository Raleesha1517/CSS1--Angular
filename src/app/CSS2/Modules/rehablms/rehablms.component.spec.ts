import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehablmsComponent } from './rehablms.component';

describe('RehablmsComponent', () => {
  let component: RehablmsComponent;
  let fixture: ComponentFixture<RehablmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehablmsComponent]
    });
    fixture = TestBed.createComponent(RehablmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
