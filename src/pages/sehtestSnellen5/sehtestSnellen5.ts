import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSnellen6Page } from '../sehtestSnellen6/sehtestSnellen6';


@Component({
  selector: 'page-sehtestSnellen5',
  templateUrl: 'sehtestSnellen5.html'
})
export class SehtestSnellen5Page {

  value: Boolean; 

 constructor(public navCtrl: NavController) {
  }
  goSnellen6(value: Boolean){
    this.value = value;
    console.log("Value is " + value);
    this.navCtrl.push(SehtestSnellen6Page);
  }
}
