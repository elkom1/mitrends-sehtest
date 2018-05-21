import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestAnleitung2Page } from '../sehtestAnleitung2/sehtestAnleitung2';

@Component({
  selector: 'page-sehtestAnleitung1',
  templateUrl: 'sehtestAnleitung1.html'
})
export class SehtestAnleitung1Page {

  constructor(public navCtrl: NavController) {
    
  }
  goAnleitung2(){
    this.navCtrl.push(SehtestAnleitung2Page);
  }
}
