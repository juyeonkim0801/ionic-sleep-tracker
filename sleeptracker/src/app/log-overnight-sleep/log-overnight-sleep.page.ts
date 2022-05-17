import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogOvernightSleepPageRoutingModule } from './log-overnight-sleep-routing.module';

import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { StorageService } from '../services/storage-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-log-overnight-sleep',
  templateUrl: './log-overnight-sleep.page.html',
  styleUrls: ['./log-overnight-sleep.page.scss'],
})
export class LogOvernightSleepPage implements OnInit {

  ngOnInit() {
  }

  @ViewChild(IonDatetime) datetime: IonDatetime;

  showPicker = false;
  //dateValue = '';//format(new Date(), 'MM-dd-yyyy')
  dateValue1 = '';
  dateValue2 = '';
  timeValue1 = '';
  timeValue2 = '';

  listData = [];
  constructor(private storageService: StorageService, private alertCtrl: AlertController){
    this.loadData();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Your sleep session is saved.',
      subHeader: 'Please see Data to check.',
      buttons: ['Dismiss']
    });
    await alert.present();
  }

  async invalidAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Please check your responses',
      subHeader: 'Wake time cannot preceed sleep time',
      buttons: ['Dismiss']
    });
    await alert.present();
  }


  async loadData() {
    this.listData = await this.storageService.getData('sleeplist');
  }

  async addData() {
    console.log(this.dateValue1);
    if (this.dateValue2 < this.dateValue1){
      await this.invalidAlert();
      return;
    } else if (this.dateValue1 === this.dateValue2) {
      if (this.timeValue2 < this.timeValue1){
        await this.invalidAlert();
        return;
      }
    } else {
      await this.storageService.addData([this.dateValue1, this.timeValue1, this.dateValue2, this.timeValue2], 'sleeplist');
      console.log("ADD DATA");
      await this.loadData();
      await this.presentAlert();
      console.log(this.listData);
    }
    
  }

  setToday(){
  }
  confirm() {
    this.datetime.confirm(true);
  }
  
  reset() {
    this.datetime.reset();
  }
  formatDate(value: string) {
    console.log("IONIC");

    return value;//format(parseISO(value), 'MMM dd yyyy');
  }

  formatTime(value: string){
    console.log(value);
    return value; //format(parseISO(value), 'HH:mm');
  }

}
