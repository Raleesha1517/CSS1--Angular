import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HspsbatsComponent } from './hspsbats.component';

describe('HspsbatsComponent', () => {
  let component: HspsbatsComponent;
  let fixture: ComponentFixture<HspsbatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HspsbatsComponent]
    });
    fixture = TestBed.createComponent(HspsbatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
