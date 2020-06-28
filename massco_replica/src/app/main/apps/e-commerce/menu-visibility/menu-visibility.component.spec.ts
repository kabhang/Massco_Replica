import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVisibilityComponent } from './menu-visibility.component';

describe('MenuVisibilityComponent', () => {
  let component: MenuVisibilityComponent;
  let fixture: ComponentFixture<MenuVisibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVisibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
