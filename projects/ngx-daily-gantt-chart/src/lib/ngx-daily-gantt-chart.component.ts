import { Component, OnInit, Input } from '@angular/core';
import { differenceInHours, set, differenceInMinutes } from 'date-fns';

@Component({
  selector: 'gantt-chart',
  templateUrl: 'ngx-daily-gantt-chart.component.html',
  styleUrls: ['ngx-daily-gantt-chart.component.scss']
})
export class NgxDailyGanttChartComponent implements OnInit {
  @Input() dayStart: any;
  @Input() dayEnd: any;
  @Input() tasks: any;
  dayStartHour: number;
  today = new Date();
  selectedDate = this.today;
  workingHours: number;
  constructor() {}

  ngOnInit(): void {
    this.prepareChart();
    this.prepareTasks();
  }

  prepareChart() {
    this.dayStartHour = this.getHourFromTime(this.dayStart);
    this.workingHours =
      this.diffFromTime(this.dayEnd, this.dayStart, 'hours') + 2;
  }
  prepareTasks() {
    this.tasks.map((task) => {
      task.width = this.diffFromTime(task.end, task.start, 'minutes') * 2;
      task.offset = this.diffFromTime(task.start, this.dayStart, 'minutes') * 2;
    });
  }
  onTaskClick(clickedTask) {
    if (clickedTask.isParent) {
      this.tasks.filter((task) => {
        if (task.parentID === clickedTask.id) {
          task.isHidden = !task.isHidden;
          clickedTask.active = !clickedTask.active;
        }
      });
    }
  }
  getHourFromTime(timeStr) {
    return Number(timeStr.split(':')[0]);
  }
  getMinuteFromTime(timeStr) {
    return Number(timeStr.split(':')[1]);
  }
  diffFromTime(endTime, StartTime, returnFormat: 'hours' | 'minutes') {
    const [endTimeHour, endTimeMinute] = endTime.split(':');
    const [StartTimeHour, StartTimeMinute] = StartTime.split(':');
    const taskEndDate = set(this.today, {
      hours: endTimeHour,
      minutes: endTimeMinute,
      seconds: 0
    });
    const taskStartDate = set(this.today, {
      hours: StartTimeHour,
      minutes: StartTimeMinute,
      seconds: 0
    });
    let res;
    switch (returnFormat) {
      case 'hours':
        res = differenceInHours(new Date(taskEndDate), new Date(taskStartDate));
        break;
      case 'minutes':
        res = differenceInMinutes(
          new Date(taskEndDate),
          new Date(taskStartDate)
        );
        break;

      default:
        break;
    }
    return res;
  }
}
