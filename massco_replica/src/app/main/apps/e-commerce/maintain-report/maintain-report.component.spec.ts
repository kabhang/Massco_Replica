import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainReportComponent } from './maintain-report.component';

describe('MaintainReportComponent', () => {
  let component: MaintainReportComponent;
  let fixture: ComponentFixture<MaintainReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
