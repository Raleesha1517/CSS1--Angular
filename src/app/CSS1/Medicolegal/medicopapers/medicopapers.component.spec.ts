import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicopapersComponent } from './medicopapers.component';

describe('MedicopapersComponent', () => {
  let component: MedicopapersComponent;
  let fixture: ComponentFixture<MedicopapersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicopapersComponent]
    });
    fixture = TestBed.createComponent(MedicopapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
