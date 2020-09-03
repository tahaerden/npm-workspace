import { NgModule } from '@angular/core';
import { NgxIconCalendarComponent } from './ngx-icon-calendar.component';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NgxIconCalendarComponent],
  imports: [CommonModule, TranslateModule, MatGridListModule, MatButtonModule],
  exports: [NgxIconCalendarComponent]
})
export class NgxIconCalendarModule {}
