import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachTableComponent } from './attach-table.component';

describe('AttachTableComponent', () => {
  let component: AttachTableComponent;
  let fixture: ComponentFixture<AttachTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
