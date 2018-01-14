import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { LoginPage}  from './views/login/login';
import { LocalStorage } from "./service/LocalStorage/localstorage.service";
import { ListPage } from "./views/list/list";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
		private platform: Platform, 
	  statusBar: StatusBar, 
    splashScreen: SplashScreen,
      public ls:LocalStorage,
	  public push: Push) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
	  splashScreen.hide();
	  this.initPushNotification();
    });
  }
  ngOnInit(){
    if(this.ls.getIt('start')){
      this.rootPage = ListPage;
    }
  }
  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: '218127169933'
      },
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);
	console.log(pushObject);
    pushObject.on('registration').subscribe((data: any) => {
	  console.log('device token -> ' + data.registrationId)
      //TODO - send device token to server
    },error=>{
		console.log(error);
	});
    pushObject.on('notification').subscribe((data: any) => {
      console.log('message -> ' + data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
		// if application open, show popup
		/*
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              this.nav.push(DetailsPage, { message: data.message });
            }
          }]
        });
		confirmAlert.present();
		*/
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        //this.nav.push(DetailsPage, { message: data.message });
        console.log('Push notification clicked');
      }
    },error=>{
		console.log(error);
	});

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }
}

