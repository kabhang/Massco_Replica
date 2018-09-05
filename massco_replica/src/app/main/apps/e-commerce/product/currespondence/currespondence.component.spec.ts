import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrespondenceComponent } from './currespondence.component';

describe('CurrespondenceComponent', () => {
  let component: CurrespondenceComponent;
  let fixture: ComponentFixture<CurrespondenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrespondenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrespondenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
