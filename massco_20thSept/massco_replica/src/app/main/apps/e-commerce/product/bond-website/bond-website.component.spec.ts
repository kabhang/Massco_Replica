import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondWebsiteComponent } from './bond-website.component';

describe('BondWebsiteComponent', () => {
  let component: BondWebsiteComponent;
  let fixture: ComponentFixture<BondWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
