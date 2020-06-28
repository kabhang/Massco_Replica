import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialougeTableComponent } from './dialouge-table.component';

describe('DialougeTableComponent', () => {
  let component: DialougeTableComponent;
  let fixture: ComponentFixture<DialougeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialougeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialougeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
