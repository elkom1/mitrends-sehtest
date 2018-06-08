import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fragebogen2Page } from '../Fragebogen2/Fragebogen2';

@Component({
  selector: 'page-Fragebogen1',
  templateUrl: 'Fragebogen1.html'
})
export class Fragebogen1Page {

  frage1a: any; 
  frage1b: any; 

  constructor(public navCtrl: NavController) {
    this.frage1a = {};
    this.frage1b = {};
  }

  goFragebogen2() {
    this.navCtrl.push(Fragebogen2Page); 
  }
}
