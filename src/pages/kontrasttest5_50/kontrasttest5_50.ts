import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest6_50_Page } from '../kontrasttest6_50/kontrasttest6_50';


@Component({
  selector: 'page-kontrasttest5_50',
  templateUrl: 'kontrasttest5_50.html'
})
export class kontrasttest5_50_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest6(){
    this.navCtrl.push(kontrasttest6_50_Page);
  }
}
