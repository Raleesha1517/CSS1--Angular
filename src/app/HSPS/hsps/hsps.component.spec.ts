import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HspsComponent } from './hsps.component';

describe('HspsComponent', () => {
  let component: HspsComponent;
  let fixture: ComponentFixture<HspsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HspsComponent]
    });
    fixture = TestBed.createComponent(HspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
