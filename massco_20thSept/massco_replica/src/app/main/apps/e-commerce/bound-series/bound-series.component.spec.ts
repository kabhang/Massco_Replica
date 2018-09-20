import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundSeriesComponent } from './bound-series.component';

describe('BoundSeriesComponent', () => {
  let component: BoundSeriesComponent;
  let fixture: ComponentFixture<BoundSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
