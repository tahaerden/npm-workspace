# NgxDailyGanttChart

ngx-daily-gantt-chart is a very simple Angular gantt-chart component with a day-view.

![ngx-daily-gantt-chart screenshot](https://github.com/tahaerden/npm-workspace/raw/master/projects/ngx-daily-gantt-chart/images/ss.png)

## Features

1. Dynamic workhours for each day.
2. Expandable child tasks.
3. Multiple color-coded task statuses per task.
4. Modern design themes: Material and gradient.
5. Tooltips with additional info for the bars and statuses on timeline.

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
  [theme]="'gradient'"
></gantt-chart>
<!-- Theme is optional. Values are 'gradient', 'material', null. Default is 'material'  -->
```

Your tasks array should look like the following:

```TS
tasks = [
    {
      id: 1,
      label: 'task 1',
      description: 'description for task 1',
      start: '09:00',
      end: '14:30',
      statusList: [
        {
          start: '09:30',
          color: '#18BFED'
        },
        {
          start: '10:30',
          color: '#b3c71e'
        }
      ]
    },
    {
      id: 2,
      label: 'task 2',
      description: 'description for task 2',
      start: '10:00',
      end: '11:00',
      isParent: true, // makes this row clickable & expandable
      statusList: [
        {
          start: '09:30',
          color: '#18BFED'
        },
        {
          start: '09:45',
          color: '#ff7300'
        },
        {
          start: '10:30',
          color: '#b3c71e'
        }
      ]
    },
    {
      id: 3, // Unique ID
      parentID: 2, // states this is a subtask
      isHidden: true, // hidden by default
      label: 'task 2a', // is shown inside the bars on timeline
      description: 'description for task 2a',
      tooltip: 'tooltip for task', // is shown when task is hovered
      start: '10:00', // start time of the task
      end: '14:25', // end time of the task
      statusList: [
        {
          start: '11:30', // start time of first status
          color: '#18BFED' // background color of the status
        },
        {
          start: '12:30', // start time of second status = end time of first status
          color: '#b3c71e',
          tooltip: 'tooltip for status', // is shown when status is hovered
        }
      ]
    }
  ];
```
