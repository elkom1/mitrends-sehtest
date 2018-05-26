import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest6_100_Page } from '../kontrasttest6_100/kontrasttest6_100';


@Component({
  selector: 'page-kontrasttest5_100',
  templateUrl: 'kontrasttest5_100.html'
})
export class kontrasttest5_100_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest6(){
    this.navCtrl.push(kontrasttest6_100_Page);
  }
}
