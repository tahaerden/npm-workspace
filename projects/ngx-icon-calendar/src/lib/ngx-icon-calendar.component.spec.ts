import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIconCalendarComponent } from './ngx-icon-calendar.component';

describe('NgxIconCalendarComponent', () => {
  let component: NgxIconCalendarComponent;
  let fixture: ComponentFixture<NgxIconCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIconCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIconCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
