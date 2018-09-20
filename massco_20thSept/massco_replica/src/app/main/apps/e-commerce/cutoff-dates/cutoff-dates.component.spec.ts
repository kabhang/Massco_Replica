import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutoffDatesComponent } from './cutoff-dates.component';

describe('CutoffDatesComponent', () => {
  let component: CutoffDatesComponent;
  let fixture: ComponentFixture<CutoffDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutoffDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutoffDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
