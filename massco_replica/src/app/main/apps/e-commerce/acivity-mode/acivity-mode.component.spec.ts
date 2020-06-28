import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcivityModeComponent } from './acivity-mode.component';

describe('AcivityModeComponent', () => {
  let component: AcivityModeComponent;
  let fixture: ComponentFixture<AcivityModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcivityModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcivityModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
