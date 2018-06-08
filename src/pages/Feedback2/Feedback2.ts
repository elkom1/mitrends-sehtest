import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';

@Component({
  selector: 'page-Feedback2',
  templateUrl: 'Feedback2.html'
})
export class Feedback2Page {

  frage3: any;
  frage4: any;

  constructor(public navCtrl: NavController) {
    this.frage3 = {};
    this.frage4 = {};
  }
  goSehTestHome(){
    this.navCtrl.push(SehtestHomePage);
  }
}
