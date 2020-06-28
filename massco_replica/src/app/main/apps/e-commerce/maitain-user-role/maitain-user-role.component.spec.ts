import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitainUSerRoleComponent } from './maitain-user-role.component';

describe('MaitainUSerRoleComponent', () => {
  let component: MaitainUSerRoleComponent;
  let fixture: ComponentFixture<MaitainUSerRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaitainUSerRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitainUSerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
