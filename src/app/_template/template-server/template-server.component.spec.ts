import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateServerComponent } from './template-server.component';

describe('TemplateServerComponent', () => {
  let component: TemplateServerComponent;
  let fixture: ComponentFixture<TemplateServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
