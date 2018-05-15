import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestAnleitung1Page } from '../sehtestAnleitung1/sehtestAnleitung1';

@Component({
  selector: 'page-sehtestHome',
  templateUrl: 'sehtestHome.html'
})
export class SehtestHomePage {

  constructor(public navCtrl: NavController) {
  }
  goSehtestAnleitung1(){
    this.navCtrl.push(SehtestAnleitung1Page);
  }
}
