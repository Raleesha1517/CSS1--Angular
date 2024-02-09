import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntComponent } from './ent.component';

describe('EntComponent', () => {
  let component: EntComponent;
  let fixture: ComponentFixture<EntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntComponent]
    });
    fixture = TestBed.createComponent(EntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
