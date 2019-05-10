import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminServerListComponent } from './page-admin-server-list.component';

describe('PageAdminServerListComponent', () => {
  let component: PageAdminServerListComponent;
  let fixture: ComponentFixture<PageAdminServerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminServerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
