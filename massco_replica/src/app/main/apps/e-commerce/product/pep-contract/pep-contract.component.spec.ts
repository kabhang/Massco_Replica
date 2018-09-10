import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepContractComponent } from './pep-contract.component';

describe('PepContractComponent', () => {
  let component: PepContractComponent;
  let fixture: ComponentFixture<PepContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
