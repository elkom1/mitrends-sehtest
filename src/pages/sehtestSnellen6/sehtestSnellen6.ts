import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest1_100_Page } from '../kontrasttest1_100/kontrasttest1_100';


@Component({
  selector: 'page-sehtestSnellen6',
  templateUrl: 'sehtestSnellen6.html'
})
export class SehtestSnellen6Page {

  value: Boolean; 

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest1(value: Boolean){
    this.value = value;
    console.log("Value is " + value);
    this.navCtrl.push(kontrasttest1_100_Page);
  }
}
