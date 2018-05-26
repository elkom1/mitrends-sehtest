import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest2_100_Page } from '../kontrasttest2_100/kontrasttest2_100';


@Component({
  selector: 'page-kontrasttest1_100',
  templateUrl: 'kontrasttest1_100.html'
})
export class kontrasttest1_100_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest2(){
    this.navCtrl.push(kontrasttest2_100_Page);
  }
}
