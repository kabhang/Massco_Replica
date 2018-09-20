import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionInboxComponent } from './expansion-inbox.component';

describe('ExpansionInboxComponent', () => {
  let component: ExpansionInboxComponent;
  let fixture: ComponentFixture<ExpansionInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
