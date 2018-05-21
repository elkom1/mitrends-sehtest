import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSnellen1Page } from '../sehtestSnellen1/sehtestSnellen1';

@Component({
  selector: 'page-sehtestFarbtafel',
  templateUrl: 'sehtestFarbtafel.html'
})
export class SehtestFarbtafelPage {

 constructor(public navCtrl: NavController) {
  }
  goSnellen1(){
    this.navCtrl.push(SehtestSnellen1Page);
  }
}
