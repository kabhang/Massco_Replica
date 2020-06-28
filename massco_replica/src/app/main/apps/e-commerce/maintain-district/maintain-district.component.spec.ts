import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainDistrictComponent } from './maintain-district.component';

describe('MaintainDistrictComponent', () => {
  let component: MaintainDistrictComponent;
  let fixture: ComponentFixture<MaintainDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
