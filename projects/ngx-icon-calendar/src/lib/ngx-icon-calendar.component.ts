import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-icon-calendar',
  templateUrl: 'ngx-icon-calendar.component.html',
  styleUrls: ['ngx-icon-calendar.component.scss']
})
export class NgxIconCalendarComponent implements OnInit {
  @Input() events: any;
  @Input() prevButtonText = '';
  @Input() nextButtonText = '';
  iconSortArray = [];
  eventDates = [];
  cells = [];
  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  visibleMonth: string;
  prevMonth: string;
  nextMonth: string;
  visibleYear: string;
  prevYear: number;
  nextYear: number;
  daysShort = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ];
  constructor() {}

  ngOnInit(): void {
    this.drawCalendar(this.currentMonth, this.currentYear);
  }

  isObjEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  next() {
    this.currentYear =
      this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.drawCalendar(this.currentMonth, this.currentYear);
  }

  previous() {
    this.currentYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.drawCalendar(this.currentMonth, this.currentYear);
  }

  daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  drawCalendar(month, year) {
    let firstDay = new Date(year, month).getDay() + 6;
    // Shifting firstday to match Monday
    if (firstDay > 6) {
      firstDay = firstDay % 7;
    }
    // clearing all previous cells
    this.cells = [];
    // filing data about month and year in the page via DOM.
    this.visibleMonth = this.months[month];
    this.prevMonth =
      this.months[month - 1] || this.months[this.months.length - 1];
    this.nextMonth = this.months[month + 1] || this.months[0];
    this.visibleYear = year;
    this.prevYear = year;
    this.nextYear = year;
    if (month === 0) {
      this.prevYear = year - 1;
    } else if (month === 11) {
      this.nextYear = year + 1;
    }
    // creating all cells
    let date = 1;

    for (let i = 0; i < 6; i++) {
      // creating individual cells, filling them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          this.cells.push({
            dayNumber: '',
            dayClass: '',
            cellClass: ''
          });
        } else if (date > this.daysInMonth(month, year)) {
          break;
        } else {
          const momentYear = year;
          let momentMonth = (month + 1).toString();
          if (momentMonth.length === 1) {
            momentMonth = '0' + momentMonth;
          }
          let momentDay = date.toString();
          if (momentDay.length === 1) {
            momentDay = '0' + momentDay;
          }
          // const cellDate = moment(
          //   momentYear + '-' + momentMonth + '-' + momentDay
          // ).format('YYYY-MM-DD');
          const cellDate = momentYear + '-' + momentMonth + '-' + momentDay;

          let styleList = {};
          let cellClass = '';
          const dayClass = '';
          if (this.events[cellDate]) {
            cellClass = this.events[cellDate].className;
          }
          if (this.events[cellDate] && this.events[cellDate].icon) {
            const iconNames = this.events[cellDate].icon.split('-');
            for (const item of iconNames) {
              // dayClass = 'text-white';
              switch (iconNames.length) {
                case 1:
                  styleList = {
                    center: iconNames[0],
                    topLeft: 'blank',
                    topRight: 'blank',
                    bottomLeft: 'blank',
                    bottomRight: 'blank'
                  };
                  break;
                case 2:
                  styleList = {
                    center: 'blank',
                    topLeft: iconNames[0],
                    topRight: 'blank',
                    bottomLeft: 'blank',
                    bottomRight: iconNames[1]
                  };
                  break;
                case 3:
                  styleList = {
                    center: 'blank',
                    topLeft: iconNames[0],
                    topRight: iconNames[1],
                    bottomLeft: 'blank',
                    bottomRight: iconNames[2]
                  };
                  break;
                case 4:
                  styleList = {
                    center: 'blank',
                    topLeft: iconNames[0],
                    topRight: iconNames[1],
                    bottomLeft: iconNames[2],
                    bottomRight: iconNames[3]
                  };
                  break;
                default:
                  break;
              }
            }
          }

          if (this.isObjEmpty(styleList)) {
            styleList = {
              center: 'blank',
              topLeft: 'blank',
              topRight: 'blank',
              bottomLeft: 'blank',
              bottomRight: 'blank'
            };
          }

          this.cells.push({
            date: cellDate,
            dayNumber: date.toString(),
            dayClass,
            cellClass,
            styles: styleList
          });
          // color today's date
          if (
            date === this.today.getDate() &&
            year === this.today.getFullYear() &&
            month === this.today.getMonth()
          ) {
            this.cells[this.cells.length - 1].dayClass = 'today accent-bg';
          }
          date++;
        }
      }
    }
  }
}
