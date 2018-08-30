import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NOCComponent } from './noc.component';

describe('NOCComponent', () => {
  let component: NOCComponent;
  let fixture: ComponentFixture<NOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
