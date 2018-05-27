import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSchlussViewPage } from '../sehtestSchlussView/sehtestSchlussView';


@Component({
  selector: 'page-kontrasttest6_25',
  templateUrl: 'kontrasttest6_25.html'
})
export class kontrasttest6_25_Page {

 constructor(public navCtrl: NavController) {
  }
  goSehtestSchlussView() {
    this.navCtrl.push(SehtestSchlussViewPage); 
  }
}
