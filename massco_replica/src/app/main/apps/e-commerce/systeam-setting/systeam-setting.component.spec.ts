import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysteamSettingComponent } from './systeam-setting.component';

describe('SysteamSettingComponent', () => {
  let component: SysteamSettingComponent;
  let fixture: ComponentFixture<SysteamSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysteamSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysteamSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
