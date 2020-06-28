import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainHelpComponent } from './maintain-help.component';

describe('MaintainHelpComponent', () => {
  let component: MaintainHelpComponent;
  let fixture: ComponentFixture<MaintainHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
