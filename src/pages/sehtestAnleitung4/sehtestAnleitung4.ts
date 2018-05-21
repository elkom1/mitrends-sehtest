import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestFarbtafelPage } from '../sehtestFarbtafel/sehtestFarbtafel';

@Component({
  selector: 'page-sehtestAnleitung4',
  templateUrl: 'sehtestAnleitung4.html'
})
export class SehtestAnleitung4Page {

 constructor(public navCtrl: NavController) {
  }
  goFarbTafel() {
    this.navCtrl.push(SehtestFarbtafelPage); 
  }
}
