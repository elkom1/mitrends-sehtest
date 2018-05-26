import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest1_50_Page } from '../kontrasttest1_50/kontrasttest1_50';


@Component({
  selector: 'page-kontrasttest6_100',
  templateUrl: 'kontrasttest6_100.html'
})
export class kontrasttest6_100_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest1(){
    this.navCtrl.push(kontrasttest1_50_Page);
  }
}
