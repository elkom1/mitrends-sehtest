import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';
import { Fragebogen3Page } from '../Fragebogen3/Fragebogen3';

@Component({
  selector: 'page-Fragebogen2',
  templateUrl: 'Fragebogen2.html'
})
export class Fragebogen2Page {

  frage2: any; 
  frage3a: any; 

  constructor(public navCtrl: NavController) {
    this.frage2 = {};
    this.frage3a = {};
  }
  goFragebogen3(){
    this.navCtrl.push(Fragebogen3Page);
  }
}
