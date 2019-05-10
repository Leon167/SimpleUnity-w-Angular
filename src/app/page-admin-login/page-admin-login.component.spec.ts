import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminLoginComponent } from './page-admin-login.component';

describe('PageAdminLoginComponent', () => {
  let component: PageAdminLoginComponent;
  let fixture: ComponentFixture<PageAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
