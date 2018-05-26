import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest2_50_Page } from '../kontrasttest2_50/kontrasttest2_50';


@Component({
  selector: 'page-kontrasttest1_50',
  templateUrl: 'kontrasttest1_50.html'
})
export class kontrasttest1_50_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest2(){
    this.navCtrl.push(kontrasttest2_50_Page);
  }
}
