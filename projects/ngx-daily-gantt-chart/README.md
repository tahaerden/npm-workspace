# NgxDailyGanttChart

ngx-daily-gantt-chart is a very simple Angular gantt-chart component with a day-view.

## Features

1. Dynamic workhours for each day.
2. Expandable child tasks.
3. Modern design with gradient colors.

## TODO

1. Add task statuses.
2. Add tooltips to the bars and statuses on timeline.

## Installation

Run `npm install ngx-daily-gantt-chart --save` or download zip from github / clone repo.

## Usage

Include the module in your component as:

`import { NgxDailyGanttChartModule } from 'ngx-daily-gantt-chart';`

Add the component in your HTML with the following inputs:

```HTML
<gantt-chart
  [dayStart]="'09:00'"
  [dayEnd]="'15:30'"
  [tasks]="tasks"
></gantt-chart>
```

Your tasks array should look like the following:

```TS
tasks = [
  {
    id: 1, // Unique ID
    label: 'task 1', // is shown inside the bars on timeline
    description: 'description for task 1',
    start: '09:00', // start time of the task
    end: '10:00' // end time of the task
  },
  {
    id: 2,
    label: 'task 2',
    description: 'description for task 2',
    start: '10:00',
    end: '11:00',
    isParent: true // makes this row clickable & expandable
  },
  {
    id: 3,
    parentID: 2, // states this is a subtask
    isHidden: true, // hidden by default
    label: 'task 2a',
    description: 'description for task 2a',
    start: '10:00',
    end: '14:25'
  }
]
```
