import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCodeComponent } from './object-code.component';

describe('ObjectCodeComponent', () => {
  let component: ObjectCodeComponent;
  let fixture: ComponentFixture<ObjectCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
