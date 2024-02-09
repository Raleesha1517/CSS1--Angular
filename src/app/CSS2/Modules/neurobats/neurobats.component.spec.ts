import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurobatsComponent } from './neurobats.component';

describe('NeurobatsComponent', () => {
  let component: NeurobatsComponent;
  let fixture: ComponentFixture<NeurobatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeurobatsComponent]
    });
    fixture = TestBed.createComponent(NeurobatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
