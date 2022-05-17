import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-log-sleepiness',
  templateUrl: './log-sleepiness.page.html',
  styleUrls: ['./log-sleepiness.page.scss'],
})
export class LogSleepinessPage implements OnInit {

  constructor(private storageService: StorageService, private alertCtrl: AlertController) {
    this.loadData();
  }

  sleepiness = 0;
  listData = [];
  async loadData() {
    this.listData = await this.storageService.getData('sleepy');
  }

  async addData() {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      await this.storageService.addData([today.toISOString(), this.sleepiness], 'sleepy');
      console.log("ADD DATA");
      await this.loadData();
      console.log(this.listData);
    }
    
  
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Your level of sleepiness is saved.',
      subHeader: 'Please see Data to check.',
      buttons: ['Dismiss']
    });
    await alert.present();
  }
  async loggedSleep() {
    await this.addData();
    this.presentAlert();
  }
  /*buttonColor: string = '#000';
  buttonClick(){
    console.log("Clicked");
    if (this.buttonColor != '#f6c971') {
      this.buttonColor = '#f6c971'
    }
  }*/
}
