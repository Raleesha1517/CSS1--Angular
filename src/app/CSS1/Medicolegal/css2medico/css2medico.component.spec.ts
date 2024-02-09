import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Css2medicoComponent } from './css2medico.component';

describe('Css2medicoComponent', () => {
  let component: Css2medicoComponent;
  let fixture: ComponentFixture<Css2medicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Css2medicoComponent]
    });
    fixture = TestBed.createComponent(Css2medicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
