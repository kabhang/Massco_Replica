import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuretyComponent } from './surety.component';

describe('SuretyComponent', () => {
  let component: SuretyComponent;
  let fixture: ComponentFixture<SuretyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuretyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuretyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
