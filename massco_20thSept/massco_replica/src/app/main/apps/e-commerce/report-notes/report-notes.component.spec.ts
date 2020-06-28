import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNotesComponent } from './report-notes.component';

describe('ReportNotesComponent', () => {
  let component: ReportNotesComponent;
  let fixture: ComponentFixture<ReportNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
