import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatVideosComponent } from './bat-videos.component';

describe('BatVideosComponent', () => {
  let component: BatVideosComponent;
  let fixture: ComponentFixture<BatVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatVideosComponent]
    });
    fixture = TestBed.createComponent(BatVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
