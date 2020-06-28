import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContarctDetailComponent } from './contarct-detail.component';

describe('ContarctDetailComponent', () => {
  let component: ContarctDetailComponent;
  let fixture: ComponentFixture<ContarctDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContarctDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContarctDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
