import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogOvernightSleepPageRoutingModule } from './log-overnight-sleep-routing.module';

import { LogOvernightSleepPage } from './log-overnight-sleep.page';
import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogOvernightSleepPageRoutingModule
  ],
  declarations: [LogOvernightSleepPage]
})

/*@Component({
  selector: 'app-log-overnight-sleep',
  templateUrl: 'log-overnight-sleep.page.html',
  styleUrls: ['log-overnight-sleep.page.scss']
})
*/

export class LogOvernightSleepPageModule {
}

