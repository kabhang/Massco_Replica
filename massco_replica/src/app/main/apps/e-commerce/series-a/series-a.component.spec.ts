import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesAComponent } from './series-a.component';

describe('SeriesAComponent', () => {
  let component: SeriesAComponent;
  let fixture: ComponentFixture<SeriesAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
