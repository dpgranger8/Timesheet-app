import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing-module';
import { App } from './app';
import { Departments } from './components/departments/departments';
import { Timesheet } from './components/timesheet/timesheet';
import { Analytics } from './components/analytics/analytics';
import { TopNavbar } from './components/top-navbar/top-navbar';
import { AnalyticsTable } from './components/analytics-table/analytics-table';
import { MaterialModule } from './modules/material-module';

@NgModule({
  declarations: [
    App,
    Departments,
    Timesheet,
    Analytics,
    TopNavbar,
    AnalyticsTable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
