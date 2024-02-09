import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaDriveComponent } from './aca-drive.component';

describe('AcaDriveComponent', () => {
  let component: AcaDriveComponent;
  let fixture: ComponentFixture<AcaDriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcaDriveComponent]
    });
    fixture = TestBed.createComponent(AcaDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
