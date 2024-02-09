import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalhealthbatsComponent } from './mentalhealthbats.component';

describe('MentalhealthbatsComponent', () => {
  let component: MentalhealthbatsComponent;
  let fixture: ComponentFixture<MentalhealthbatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentalhealthbatsComponent]
    });
    fixture = TestBed.createComponent(MentalhealthbatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
