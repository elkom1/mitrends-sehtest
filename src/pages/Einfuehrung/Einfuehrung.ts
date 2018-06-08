import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';

@Component({
  selector: 'page-Einfuehrung',
  templateUrl: 'Einfuehrung.html'
})
export class EinfuehrungsPage {

  constructor(public navCtrl: NavController) {
    
  }
  goSehTestHome(){
    this.navCtrl.push(SehtestHomePage);
  }
}
