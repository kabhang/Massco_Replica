import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionHealthComponent } from './expansion-health.component';

describe('ExpansionHealthComponent', () => {
  let component: ExpansionHealthComponent;
  let fixture: ComponentFixture<ExpansionHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
