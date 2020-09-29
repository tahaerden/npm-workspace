# NgxIconCalendar

ngx-icon-calendar is a very simple Angular gantt-chart component with a day-view.

![ngx-icon-calendar screenshot](https://github.com/tahaerden/npm-workspace/raw/master/projects/ngx-icon-calendar/images/ss.png)

## Features

1. Very light-weight monthly calendar, drawn with basic JS.
2. Displays up to 4 icons at once. Displays a button to show a dialog for more than 4 icons.
3. Responsive modern material design.

## Installation

Run `npm install ngx-icon-calendar --save` or download zip from github / clone repo.

## Usage

Include the module in your component as:

`import { NgxIconCalendarModule } from 'ngx-icon-calendar';`

Add the component in your HTML with the following inputs:

```HTML
<ngx-icon-calendar
        [events]="events"
        [iconPath]="'assets/my_icons/'"
        [iconFormat]="'.png'"
        [prevButtonText]="'previous'"
        [nextButtonText]="'next'"
        [daysShort]="['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']"
>
</ngx-icon-calendar>

  iconPath (required): Relative path to your icons.
  iconFormat (optional. Default: '.png'): Image format of your icons.
  prevButtonText (optional. Default: 'previous'): Text for previous button.
  nextButtonText (optional. Default: 'next'): Text for next button.
  daysShort (optional. Default: 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'): Shortened day names.

```

Your events array should look like the following:

```TS
  events = {
    '2020-09-15': { icon: 'food' },
    '2020-09-16': { icon: 'food-gym' },
    '2020-09-17': { icon: 'food-gym-book' },
    '2020-09-18': { icon: 'food-gym-book-car' },
    '2020-09-19': { icon: 'food-gym-book-car-fifthIcon' }
  };
```

Finally, for the styling you can use the following classes in your css:

```CSS
.primary-bg {
  color: mat-color($your-primary-variable);
}
.accent-bg {
  color: mat-color($your-accent-variable);
}
```

Or simply:

```CSS
.primary-bg {
  background-color: #ffffff;
}
.accent-bg {
  background-color: #000000;
}
```
