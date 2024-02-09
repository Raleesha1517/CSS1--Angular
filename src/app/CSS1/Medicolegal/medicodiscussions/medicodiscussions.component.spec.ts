import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicodiscussionsComponent } from './medicodiscussions.component';

describe('MedicodiscussionsComponent', () => {
  let component: MedicodiscussionsComponent;
  let fixture: ComponentFixture<MedicodiscussionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicodiscussionsComponent]
    });
    fixture = TestBed.createComponent(MedicodiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
