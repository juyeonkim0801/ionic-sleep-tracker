import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { NgCalendarModule  } from 'ionic2-calendar';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.page.html',
  styleUrls: ['./view-data.page.scss'],
})
export class ViewDataPage implements OnInit {
  eventSource = [];
  viewTitle: string;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate: Date;
  //@ViewChild(CalendarComponent) myCal: CalendarComponent;
  

  onChange($event) {
    console.log($event);
  }

  ngOnInit() {
  }
  @ViewChild(IonDatetime) datetime: IonDatetime;

  showPicker = false;
  //dateValue = '';//format(new Date(), 'MM-dd-yyyy')
  dateValue5 = '';
  listData = [];
  sleepyData = [];

  logData = [];
  sleepyLogData = [];

  ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts'];

  constructor(private storageService: StorageService){
    this.loadData();
    this.setToday();
    //storageService.deleteData();
  }
  async loadData() {
    this.listData = await this.storageService.getData('sleeplist');
    this.sleepyData = await this.storageService.getData('sleepy');
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

    return format(parseISO(value), 'MMM dd yyyy');
  }

  formatTime(value: string){
    console.log('Time');
  }

  async getData(value: string){
    await this.loadData();
    //this.storageService.deleteData();
    this.logData = [];
    this.sleepyLogData = [];
    
    this.dateValue5 = value;//format(parseISO(value), 'MMM dd yyyy'); 
    if (this.listData !== null){
      for (let i = 0; i < this.listData.length; i++) {
        //console.log(format(parseISO(this.listData[i][0]), 'MMM dd yyyy'));
        //console.log(format(parseISO(this.dateValue5), 'MMM dd yyyy'));
        if (format(parseISO(this.listData[i][0]), 'MMM dd yyyy') === format(parseISO(this.dateValue5), 'MMM dd yyyy')){
          console.log(this.listData[i][0]);
          let sleep_str = format(parseISO(this.listData[i][0]), 'MMM dd yyyy') + " " + format(parseISO(this.listData[i][1]), 'hh:mm 	a' + ' ~ ');
          let wake_str = format(parseISO(this.listData[i][2]), 'MMM dd yyyy') + " " + format(parseISO(this.listData[i][3]), 'hh:mm 	a');
          let result_str = sleep_str + wake_str;
          this.logData.push([result_str]);
          //console.log(this.logData);
          //return this.listData[i];
        }
      }
    }
    
    console.log(this.dateValue5);
    if (this.sleepyData !== null){
      for (let i = 0; i < this.sleepyData.length; i++){
        if (format(parseISO(this.sleepyData[i][0]), 'MMM dd yyyy') === format(parseISO(this.dateValue5), 'MMM dd yyyy')){
          this.sleepyLogData.push(this.sleepyData[i]);
        }
      }
      console.log(this.sleepyData);
      console.log(this.sleepyLogData);
    }
    
    return;
  }
}