import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest4_25_Page } from '../kontrasttest4_25/kontrasttest4_25';


@Component({
  selector: 'page-kontrasttest3_25',
  templateUrl: 'kontrasttest3_25.html'
})
export class kontrasttest3_25_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest4(){
    this.navCtrl.push(kontrasttest4_25_Page);
  }
}
