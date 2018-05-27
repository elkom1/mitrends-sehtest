import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest3_25_Page } from '../kontrasttest3_25/kontrasttest3_25';


@Component({
  selector: 'page-kontrasttest2_25',
  templateUrl: 'kontrasttest2_25.html'
})
export class kontrasttest2_25_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest3(){
    this.navCtrl.push(kontrasttest3_25_Page);
  }
}
