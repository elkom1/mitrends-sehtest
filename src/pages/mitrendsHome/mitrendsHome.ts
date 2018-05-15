import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';

@Component({
  selector: 'page-mitrendsHome',
  templateUrl: 'mitrendsHome.html'
})
export class MitrendsHomePage {

  constructor(public navCtrl: NavController) {
  }
  goSehtestHome(){
    this.navCtrl.push(SehtestHomePage);
  }
}
