import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Css1medicoComponent } from './css1medico.component';

describe('Css1medicoComponent', () => {
  let component: Css1medicoComponent;
  let fixture: ComponentFixture<Css1medicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Css1medicoComponent]
    });
    fixture = TestBed.createComponent(Css1medicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
