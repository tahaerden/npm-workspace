import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDailyGanttChartComponent } from './ngx-daily-gantt-chart.component';

import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [NgxDailyGanttChartComponent],
  imports: [CommonModule, MatTooltipModule],
  exports: [NgxDailyGanttChartComponent]
})
export class NgxDailyGanttChartModule {}
