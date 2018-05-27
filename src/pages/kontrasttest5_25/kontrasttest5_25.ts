import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest6_25_Page } from '../kontrasttest6_25/kontrasttest6_25';


@Component({
  selector: 'page-kontrasttest5_25',
  templateUrl: 'kontrasttest5_25.html'
})
export class kontrasttest5_25_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest6(){
    this.navCtrl.push(kontrasttest6_25_Page);
  }
}
