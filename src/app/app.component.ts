import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MitrendsHomePage } from '../pages/mitrendsHome/mitrendsHome';
import { SehtestHomePage } from '../pages/sehtestHome/sehtestHome';
import { ListPage } from '../pages/list/list';
import { SehtestAnleitung1Page } from '../pages/sehtestAnleitung1/sehtestAnleitung1';
import { SehtestAnleitung2Page } from '../pages/sehtestAnleitung2/sehtestAnleitung2';
import { SehtestAnleitung3Page } from '../pages/sehtestAnleitung3/sehtestAnleitung3';
import { SehtestAnleitung4Page } from '../pages/sehtestAnleitung4/sehtestAnleitung4';
import { SehtestFarbtafelPage } from '../pages/sehtestFarbtafel/sehtestFarbtafel';
import { SehtestSnellen1Page } from '../pages/sehtestSnellen1/sehtestSnellen1';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'MitrendS Home', component: MitrendsHomePage }
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
