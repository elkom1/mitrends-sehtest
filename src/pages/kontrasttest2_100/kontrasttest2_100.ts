import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest3_100_Page } from '../kontrasttest3_100/kontrasttest3_100';


@Component({
  selector: 'page-kontrasttest2_100',
  templateUrl: 'kontrasttest2_100.html'
})
export class kontrasttest2_100_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest3(){
    this.navCtrl.push(kontrasttest3_100_Page);
  }
}
