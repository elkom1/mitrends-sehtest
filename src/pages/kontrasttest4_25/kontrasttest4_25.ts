import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest5_25_Page } from '../kontrasttest5_25/kontrasttest5_25';


@Component({
  selector: 'page-kontrasttest4_25',
  templateUrl: 'kontrasttest4_25.html'
})
export class kontrasttest4_25_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest5(){
    this.navCtrl.push(kontrasttest5_25_Page);
  }
}
