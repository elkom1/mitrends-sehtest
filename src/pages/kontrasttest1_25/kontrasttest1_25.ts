import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest2_25_Page } from '../kontrasttest2_25/kontrasttest2_25';


@Component({
  selector: 'page-kontrasttest1_25',
  templateUrl: 'kontrasttest1_25.html'
})
export class kontrasttest1_25_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest2(){
    this.navCtrl.push(kontrasttest2_25_Page);
  }
}
