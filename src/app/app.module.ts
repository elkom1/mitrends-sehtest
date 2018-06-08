import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import {NativeStorage} from '@ionic-native/native-storage';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { Network } from '@ionic-native/network';


import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { HomePage } from '../pages/home/home';
import { SehtestHomePage } from '../pages/sehtestHome/sehtestHome';
import { SehtestAnleitung1Page } from '../pages/sehtestAnleitung1/sehtestAnleitung1';
import { SehtestAnleitung2Page } from '../pages/sehtestAnleitung2/sehtestAnleitung2';
import { SehtestAnleitung3Page } from '../pages/sehtestAnleitung3/sehtestAnleitung3';
import { SehtestAnleitung4Page } from '../pages/sehtestAnleitung4/sehtestAnleitung4';
import { SehtestFarbtafelPage } from '../pages/sehtestFarbtafel/sehtestFarbtafel';
import { SehtestSnellen1Page } from '../pages/sehtestSnellen1/sehtestSnellen1';
import { SehtestSnellen2Page } from '../pages/sehtestSnellen2/sehtestSnellen2';
import { SehtestSnellen3Page } from '../pages/sehtestSnellen3/sehtestSnellen3';
import { SehtestSnellen4Page } from '../pages/sehtestSnellen4/sehtestSnellen4';
import { SehtestSnellen5Page } from '../pages/sehtestSnellen5/sehtestSnellen5';
import { SehtestSnellen6Page } from '../pages/sehtestSnellen6/sehtestSnellen6';
import { kontrasttest1_100_Page } from '../pages/kontrasttest1_100/kontrasttest1_100';
import { kontrasttest2_100_Page } from '../pages/kontrasttest2_100/kontrasttest2_100';
import { kontrasttest3_100_Page } from '../pages/kontrasttest3_100/kontrasttest3_100';
import { kontrasttest4_100_Page } from '../pages/kontrasttest4_100/kontrasttest4_100';
import { kontrasttest5_100_Page } from '../pages/kontrasttest5_100/kontrasttest5_100';
import { kontrasttest6_100_Page } from '../pages/kontrasttest6_100/kontrasttest6_100';
import { kontrasttest1_50_Page } from '../pages/kontrasttest1_50/kontrasttest1_50';
import { kontrasttest2_50_Page } from '../pages/kontrasttest2_50/kontrasttest2_50';
import { kontrasttest3_50_Page } from '../pages/kontrasttest3_50/kontrasttest3_50';
import { kontrasttest4_50_Page } from '../pages/kontrasttest4_50/kontrasttest4_50';
import { kontrasttest5_50_Page } from '../pages/kontrasttest5_50/kontrasttest5_50';
import { kontrasttest6_50_Page } from '../pages/kontrasttest6_50/kontrasttest6_50';
import { kontrasttest1_25_Page } from '../pages/kontrasttest1_25/kontrasttest1_25';
import { kontrasttest2_25_Page } from '../pages/kontrasttest2_25/kontrasttest2_25';
import { kontrasttest3_25_Page } from '../pages/kontrasttest3_25/kontrasttest3_25';
import { kontrasttest4_25_Page } from '../pages/kontrasttest4_25/kontrasttest4_25';
import { kontrasttest5_25_Page } from '../pages/kontrasttest5_25/kontrasttest5_25';
import { kontrasttest6_25_Page } from '../pages/kontrasttest6_25/kontrasttest6_25';
import { SehtestSchlussViewPage } from '../pages/sehtestSchlussView/sehtestSchlussView';
import { EinfuehrungsPage } from '../pages/Einfuehrung/Einfuehrung';
import { Fragebogen1Page } from '../pages/Fragebogen1/Fragebogen1';
import { Fragebogen2Page } from '../pages/Fragebogen2/Fragebogen2';
import { Fragebogen3Page } from '../pages/Fragebogen3/Fragebogen3';
import { Feedback1Page } from '../pages/Feedback1/Feedback1';
import { Feedback2Page } from '../pages/Feedback2/Feedback2';


// Additional service for midata
import { MidataService} from "../services/midataService";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    SehtestHomePage, 
    SehtestAnleitung1Page,
    SehtestAnleitung2Page, 
    SehtestAnleitung3Page, 
    SehtestAnleitung4Page, 
    SehtestFarbtafelPage, 
    SehtestSnellen1Page, 
    SehtestSnellen2Page, 
    SehtestSnellen3Page, 
    SehtestSnellen4Page, 
    SehtestSnellen5Page, 
    SehtestSnellen6Page, 
    kontrasttest1_100_Page, 
    kontrasttest2_100_Page, 
    kontrasttest3_100_Page, 
    kontrasttest4_100_Page, 
    kontrasttest5_100_Page, 
    kontrasttest6_100_Page, 
    kontrasttest1_50_Page, 
    kontrasttest2_50_Page, 
    kontrasttest3_50_Page, 
    kontrasttest4_50_Page, 
    kontrasttest5_50_Page, 
    kontrasttest6_50_Page, 
    kontrasttest1_25_Page, 
    kontrasttest2_25_Page, 
    kontrasttest3_25_Page, 
    kontrasttest4_25_Page,
    kontrasttest5_25_Page,
    kontrasttest6_25_Page, 
    SehtestSchlussViewPage, 
    EinfuehrungsPage, 
    Fragebogen1Page, 
    Fragebogen2Page, 
    Fragebogen3Page, 
    Feedback1Page, 
    Feedback2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SehtestHomePage,
    SehtestAnleitung1Page,
    SehtestAnleitung2Page, 
    SehtestAnleitung3Page, 
    SehtestAnleitung4Page, 
    SehtestFarbtafelPage, 
    SehtestSnellen1Page, 
    SehtestSnellen2Page, 
    SehtestSnellen3Page, 
    SehtestSnellen4Page, 
    SehtestSnellen5Page, 
    SehtestSnellen6Page, 
    kontrasttest1_100_Page, 
    kontrasttest2_100_Page, 
    kontrasttest3_100_Page, 
    kontrasttest4_100_Page, 
    kontrasttest5_100_Page, 
    kontrasttest6_100_Page, 
    kontrasttest1_50_Page, 
    kontrasttest2_50_Page, 
    kontrasttest3_50_Page, 
    kontrasttest4_50_Page, 
    kontrasttest5_50_Page, 
    kontrasttest6_50_Page, 
    kontrasttest1_25_Page, 
    kontrasttest2_25_Page, 
    kontrasttest3_25_Page, 
    kontrasttest4_25_Page,
    kontrasttest5_25_Page,
    kontrasttest6_25_Page, 
    SehtestSchlussViewPage, 
    EinfuehrungsPage, 
    Fragebogen1Page, 
    Fragebogen2Page,
    Fragebogen3Page,  
    Feedback1Page, 
    Feedback2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MidataService,
    InAppBrowser,
    NativeStorage,
    SecureStorage,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
