import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
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


// Additional Service for midata
import { MidataService } from "../services/midataService";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
