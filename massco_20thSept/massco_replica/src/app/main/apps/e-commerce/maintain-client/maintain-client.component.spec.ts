import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainClientComponent } from './maintain-client.component';

describe('MaintainClientComponent', () => {
  let component: MaintainClientComponent;
  let fixture: ComponentFixture<MaintainClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
