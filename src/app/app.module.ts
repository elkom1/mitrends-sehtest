import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MitrendsHomePage } from '../pages/mitrendsHome/mitrendsHome';
import { SehtestHomePage } from '../pages/sehtestHome/sehtestHome';
import { SehtestAnleitung1Page } from '../pages/sehtestAnleitung1/sehtestAnleitung1';
import { SehtestAnleitung2Page } from '../pages/sehtestAnleitung2/sehtestAnleitung2';
import { SehtestAnleitung3Page } from '../pages/sehtestAnleitung3/sehtestAnleitung3';
import { SehtestAnleitung4Page } from '../pages/sehtestAnleitung4/sehtestAnleitung4';
import { SehtestFarbtafelPage } from '../pages/sehtestFarbtafel/sehtestFarbtafel';
import { SehtestSnellen1Page } from '../pages/sehtestSnellen1/sehtestSnellen1';


// Additional service for midata
import { MidataService} from "../services/midataService";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MitrendsHomePage, 
    SehtestHomePage, 
    SehtestAnleitung1Page,
    SehtestAnleitung2Page, 
    SehtestAnleitung3Page, 
    SehtestAnleitung4Page, 
    SehtestFarbtafelPage, 
    SehtestSnellen1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MitrendsHomePage, 
    SehtestHomePage,
    SehtestAnleitung1Page,
    SehtestAnleitung2Page, 
    SehtestAnleitung3Page, 
    SehtestAnleitung4Page, 
    SehtestFarbtafelPage, 
    SehtestSnellen1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MidataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
