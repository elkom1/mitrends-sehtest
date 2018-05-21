import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestAnleitung4Page } from '../sehtestAnleitung4/sehtestAnleitung4';

@Component({
  selector: 'page-sehtestAnleitung3',
  templateUrl: 'sehtestAnleitung3.html'
})
export class SehtestAnleitung3Page {

 constructor(public navCtrl: NavController) {
  }
  goAnleitung4() {
    this.navCtrl.push(SehtestAnleitung4Page);
  }

}
