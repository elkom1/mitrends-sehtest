import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSnellen4Page } from '../sehtestSnellen4/sehtestSnellen4';


@Component({
  selector: 'page-sehtestSnellen3',
  templateUrl: 'sehtestSnellen3.html'
})
export class SehtestSnellen3Page {

  value: Boolean; 
  
 constructor(public navCtrl: NavController) {
  }
  goSnellen4(value: Boolean){
    this.value = value;
    console.log("Value is " + value);
    this.navCtrl.push(SehtestSnellen4Page);
  }
}
