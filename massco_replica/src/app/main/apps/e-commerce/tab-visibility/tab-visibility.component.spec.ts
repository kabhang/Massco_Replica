import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVisibilityComponent } from './tab-visibility.component';

describe('TabVisibilityComponent', () => {
  let component: TabVisibilityComponent;
  let fixture: ComponentFixture<TabVisibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabVisibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
