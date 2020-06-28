import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoAttachComponent } from './asso-attach.component';

describe('AssoAttachComponent', () => {
  let component: AssoAttachComponent;
  let fixture: ComponentFixture<AssoAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssoAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssoAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
