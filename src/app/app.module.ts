import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListModule } from './task-list/task-list.module';
import { CalendarModule } from './calendar/calendar.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TaskListModule,
    CalendarModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
