import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideosearchPage } from '../pages/videosearch/videosearch';
import { PopoverComponent } from '../components/popover/popover';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


var config = {
  apiKey: "AIzaSyAP_15gqGDixEFlC2dBbzzrGzNhZ17CUJg",
  authDomain: "lab-assignment2-c325f.firebaseapp.com",
  databaseURL: "https://lab-assignment2-c325f.firebaseio.com",
  projectId: "lab-assignment2-c325f",
  storageBucket: "lab-assignment2-c325f.appspot.com",
  messagingSenderId: "685304153045"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VideosearchPage,
    PopoverComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideosearchPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
