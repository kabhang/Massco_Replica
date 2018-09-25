import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainWorkflowComponent } from './maintain-workflow.component';

describe('MaintainWorkflowComponent', () => {
  let component: MaintainWorkflowComponent;
  let fixture: ComponentFixture<MaintainWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
