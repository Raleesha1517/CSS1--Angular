import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductiveComponent } from './reproductive.component';

describe('ReproductiveComponent', () => {
  let component: ReproductiveComponent;
  let fixture: ComponentFixture<ReproductiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReproductiveComponent]
    });
    fixture = TestBed.createComponent(ReproductiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
