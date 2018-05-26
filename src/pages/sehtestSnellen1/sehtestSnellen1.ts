import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSnellen2Page } from '../sehtestSnellen2/sehtestSnellen2';


@Component({
  selector: 'page-sehtestSnellen1',
  templateUrl: 'sehtestSnellen1.html'
})
export class SehtestSnellen1Page {

  value:Boolean;

 constructor(public navCtrl: NavController) {
  }
  goSnellen2(value: Boolean){
    this.value = value;
    console.log("Value is " + value);
    this.navCtrl.push(SehtestSnellen2Page);
  }
}
