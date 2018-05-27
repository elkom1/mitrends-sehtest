import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest1_25_Page } from '../kontrasttest1_25/kontrasttest1_25';


@Component({
  selector: 'page-kontrasttest6_50',
  templateUrl: 'kontrasttest6_50.html'
})
export class kontrasttest6_50_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest1() {
    this.navCtrl.push(kontrasttest1_25_Page)
  }
}
