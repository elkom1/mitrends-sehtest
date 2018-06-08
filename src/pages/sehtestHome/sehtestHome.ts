import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestAnleitung1Page } from '../sehtestAnleitung1/sehtestAnleitung1';
import { PopoverController } from 'ionic-angular';
import { EinfuehrungsPage } from '../Einfuehrung/Einfuehrung';
import { Fragebogen1Page } from '../Fragebogen1/Fragebogen1';
import { Feedback1Page } from '../Feedback1/Feedback1';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-sehtestHome',
  templateUrl: 'sehtestHome.html'
})
export class SehtestHomePage {

  popoverCtrl: PopoverController; 
  constructor(public navCtrl: NavController, popoverCtrl: PopoverController) {
  }
  goSehtestAnleitung1(){
    this.navCtrl.push(SehtestAnleitung1Page);
  }

  goEinfuehrung() {
    this.navCtrl.push(EinfuehrungsPage); 
  }

  goFragebogen1() {
    this.navCtrl.push(Fragebogen1Page); 
  }
  goFeedback() {
    this.navCtrl.push(Feedback1Page); 
  }
  goLogin() {
    this.navCtrl.push(LoginPage);
  }
}
