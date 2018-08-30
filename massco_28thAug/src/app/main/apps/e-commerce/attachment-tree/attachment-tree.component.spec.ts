import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentTreeComponent } from './attachment-tree.component';

describe('AttachmentTreeComponent', () => {
  let component: AttachmentTreeComponent;
  let fixture: ComponentFixture<AttachmentTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
