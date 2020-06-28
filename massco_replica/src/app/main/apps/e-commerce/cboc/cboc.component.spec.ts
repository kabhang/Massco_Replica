import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBOCComponent } from './cboc.component';

describe('CBOCComponent', () => {
  let component: CBOCComponent;
  let fixture: ComponentFixture<CBOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
