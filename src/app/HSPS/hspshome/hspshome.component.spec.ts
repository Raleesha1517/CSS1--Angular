import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HspshomeComponent } from './hspshome.component';

describe('HspshomeComponent', () => {
  let component: HspshomeComponent;
  let fixture: ComponentFixture<HspshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HspshomeComponent]
    });
    fixture = TestBed.createComponent(HspshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
