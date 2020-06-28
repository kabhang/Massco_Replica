import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysteamUtilitiesComponent } from './systeam-utilities.component';

describe('SysteamUtilitiesComponent', () => {
  let component: SysteamUtilitiesComponent;
  let fixture: ComponentFixture<SysteamUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysteamUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysteamUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
