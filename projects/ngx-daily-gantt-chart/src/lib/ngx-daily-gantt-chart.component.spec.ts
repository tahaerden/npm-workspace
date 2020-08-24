import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDailyGanttChartComponent } from './ngx-daily-gantt-chart.component';

describe('NgxDailyGanttChartComponent', () => {
  let component: NgxDailyGanttChartComponent;
  let fixture: ComponentFixture<NgxDailyGanttChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDailyGanttChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDailyGanttChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
