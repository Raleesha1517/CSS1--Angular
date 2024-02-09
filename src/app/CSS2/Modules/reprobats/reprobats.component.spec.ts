import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprobatsComponent } from './reprobats.component';

describe('ReprobatsComponent', () => {
  let component: ReprobatsComponent;
  let fixture: ComponentFixture<ReprobatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReprobatsComponent]
    });
    fixture = TestBed.createComponent(ReprobatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
