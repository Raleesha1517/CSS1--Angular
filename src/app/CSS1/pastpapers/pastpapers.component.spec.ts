import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastpapersComponent } from './pastpapers.component';

describe('PastpapersComponent', () => {
  let component: PastpapersComponent;
  let fixture: ComponentFixture<PastpapersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastpapersComponent]
    });
    fixture = TestBed.createComponent(PastpapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
