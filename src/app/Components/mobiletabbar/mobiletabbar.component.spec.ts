import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletabbarComponent } from './mobiletabbar.component';

describe('MobiletabbarComponent', () => {
  let component: MobiletabbarComponent;
  let fixture: ComponentFixture<MobiletabbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobiletabbarComponent]
    });
    fixture = TestBed.createComponent(MobiletabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
