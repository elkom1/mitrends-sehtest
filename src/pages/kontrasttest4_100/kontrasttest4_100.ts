import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest5_100_Page } from '../kontrasttest5_100/kontrasttest5_100';


@Component({
  selector: 'page-kontrasttest4_100',
  templateUrl: 'kontrasttest4_100.html'
})
export class kontrasttest4_100_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest5(){
    this.navCtrl.push(kontrasttest5_100_Page);
  }
}
