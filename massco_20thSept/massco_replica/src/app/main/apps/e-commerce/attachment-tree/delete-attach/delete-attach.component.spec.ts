import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAttachComponent } from './delete-attach.component';

describe('DeleteAttachComponent', () => {
  let component: DeleteAttachComponent;
  let fixture: ComponentFixture<DeleteAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
