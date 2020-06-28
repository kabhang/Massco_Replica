import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundFundComponent } from './bound-fund.component';

describe('BoundFundComponent', () => {
  let component: BoundFundComponent;
  let fixture: ComponentFixture<BoundFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
