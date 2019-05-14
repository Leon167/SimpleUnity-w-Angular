import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServerListComponent } from './admin-server-list.component';

describe('AdminServerListComponent', () => {
  let component: AdminServerListComponent;
  let fixture: ComponentFixture<AdminServerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminServerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
