import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestAnleitung3Page } from '../sehtestAnleitung3/sehtestAnleitung3';

@Component({
  selector: 'page-sehtestAnleitung2',
  templateUrl: 'sehtestAnleitung2.html'
})
export class SehtestAnleitung2Page {

  constructor(public navCtrl: NavController) {
    
  }
  goAnleitung3(){
    this.navCtrl.push(SehtestAnleitung3Page);
  }
}
