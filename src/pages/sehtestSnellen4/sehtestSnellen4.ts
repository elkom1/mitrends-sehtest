import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSnellen5Page } from '../sehtestSnellen5/sehtestSnellen5';


@Component({
  selector: 'page-sehtestSnellen4',
  templateUrl: 'sehtestSnellen4.html'
})
export class SehtestSnellen4Page {

  value: Boolean; 

 constructor(public navCtrl: NavController) {
  }
  goSnellen5(value: Boolean){
    this.value = value;
    console.log("Value is " + value);
    this.navCtrl.push(SehtestSnellen5Page);
  }
}
