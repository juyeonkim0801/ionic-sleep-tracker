import { NgModule , LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDataPageRoutingModule } from './view-data-routing.module';

import { ViewDataPage } from './view-data.page';

import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDataPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [ViewDataPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class ViewDataPageModule {}
