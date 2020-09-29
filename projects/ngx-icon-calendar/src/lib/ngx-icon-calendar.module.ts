import { NgModule } from '@angular/core';
import { NgxIconCalendarComponent } from './ngx-icon-calendar.component';
import { MultipleIconsDialogComponent } from './ngx-icon-calendar.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NgxIconCalendarComponent, MultipleIconsDialogComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [NgxIconCalendarComponent]
})
export class NgxIconCalendarModule {}
