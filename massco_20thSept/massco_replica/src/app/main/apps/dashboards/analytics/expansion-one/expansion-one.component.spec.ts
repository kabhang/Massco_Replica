import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionOneComponent } from './expansion-one.component';

describe('ExpansionOneComponent', () => {
  let component: ExpansionOneComponent;
  let fixture: ComponentFixture<ExpansionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
