import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';
import { Feedback2Page } from '../Feedback2/Feedback2';

@Component({
  selector: 'page-Feedback1',
  templateUrl: 'Feedback1.html'
})
export class Feedback1Page {

  frage1: any;
  frage2: any;

  constructor(public navCtrl: NavController) {
    this.frage1 = {};
    this.frage2 = {};

  }
  goFeedback2() {
    this.navCtrl.push(Feedback2Page);
  }
}
