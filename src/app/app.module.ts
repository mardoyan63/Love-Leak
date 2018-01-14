import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LoginPage} from './views/login/login'
import { RegistrationPage } from './views/registration/registration';
import { APIService } from './service/api/api-service';
import { HttpModule } from '@angular/http';
import { ListPage } from './views/list/list';
import { Settings } from './service/settings/settings';
import { Push } from '@ionic-native/push';
import { HomePage } from "../pages/home/home";
import { MessModal } from "./views/list/massage/message-modal";
import { AppSettings } from "./views/settings/settings";
import { LocalStorage } from "./service/LocalStorage/localstorage.service";
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
	RegistrationPage,
  ListPage,
  HomePage,
  MessModal,
  AppSettings
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(MessModal)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
	RegistrationPage,
  ListPage,
  HomePage,
  MessModal,
  AppSettings
  ],
  providers: [
    DeviceMotion,
    DeviceOrientation,
    LocalStorage,
    StatusBar,
    SplashScreen,
	APIService,
	Settings,
	Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
