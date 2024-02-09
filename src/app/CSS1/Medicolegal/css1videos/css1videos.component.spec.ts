import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Css1videosComponent } from './css1videos.component';

describe('Css1videosComponent', () => {
  let component: Css1videosComponent;
  let fixture: ComponentFixture<Css1videosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Css1videosComponent]
    });
    fixture = TestBed.createComponent(Css1videosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
