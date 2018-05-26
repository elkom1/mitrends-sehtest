import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest3_50_Page } from '../kontrasttest3_50/kontrasttest3_50';


@Component({
  selector: 'page-kontrasttest2_50',
  templateUrl: 'kontrasttest2_50.html'
})
export class kontrasttest2_50_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest3(){
    this.navCtrl.push(kontrasttest3_50_Page);
  }
}
