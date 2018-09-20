import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorTypeComponent } from './contractor-type.component';

describe('ContractorTypeComponent', () => {
  let component: ContractorTypeComponent;
  let fixture: ComponentFixture<ContractorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
