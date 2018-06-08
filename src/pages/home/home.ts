import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestHomePage } from '../sehtestHome/sehtestHome';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goSehtestHome(){
    this.navCtrl.push(SehtestHomePage);
  }
  goLogin() {
    this.navCtrl.push(LoginPage);
  }

}
