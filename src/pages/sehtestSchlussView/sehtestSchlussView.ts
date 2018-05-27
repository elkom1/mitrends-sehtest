import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';

@Component({
  selector: 'page-sehtestSchlussView',
  templateUrl: 'sehtestSchlussView.html'
})
export class SehtestSchlussViewPage {

  constructor(public navCtrl: NavController) {
    
  }
  goSehtestHome(){
    this.navCtrl.push(SehtestHomePage);
  }
}
