import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetVisibilityComponent } from './widget-visibility.component';

describe('WidgetVisibilityComponent', () => {
  let component: WidgetVisibilityComponent;
  let fixture: ComponentFixture<WidgetVisibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetVisibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
