import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSnellen3Page } from '../sehtestSnellen3/sehtestSnellen3';


@Component({
  selector: 'page-sehtestSnellen2',
  templateUrl: 'sehtestSnellen2.html'
})
export class SehtestSnellen2Page {

  value: Boolean; 
  
 constructor(public navCtrl: NavController) {
  }
  goSnellen3(value: Boolean){
    this.value = value;
    console.log("Value is " + value);
    this.navCtrl.push(SehtestSnellen3Page);
  }
}
