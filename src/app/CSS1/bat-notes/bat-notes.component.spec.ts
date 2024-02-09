import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatNotesComponent } from './bat-notes.component';

describe('BatNotesComponent', () => {
  let component: BatNotesComponent;
  let fixture: ComponentFixture<BatNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatNotesComponent]
    });
    fixture = TestBed.createComponent(BatNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
