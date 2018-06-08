import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';

@Component({
  selector: 'page-Fragebogen3',
  templateUrl: 'Fragebogen3.html'
})
export class Fragebogen3Page {

  frage3b: any; 
  frage4: any; 

  constructor(public navCtrl: NavController) {
    this.frage3b = {};
    this.frage4 = {};
  }
  goSehTestHome(){
    this.navCtrl.push(SehtestHomePage);
  }
}
