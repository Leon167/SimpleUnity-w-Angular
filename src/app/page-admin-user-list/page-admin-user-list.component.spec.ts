import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminUserListComponent } from './page-admin-user-list.component';

describe('PageAdminUserListComponent', () => {
  let component: PageAdminUserListComponent;
  let fixture: ComponentFixture<PageAdminUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
