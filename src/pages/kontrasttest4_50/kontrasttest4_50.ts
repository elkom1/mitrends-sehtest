import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest5_50_Page } from '../kontrasttest5_50/kontrasttest5_50';


@Component({
  selector: 'page-kontrasttest4_50',
  templateUrl: 'kontrasttest4_50.html'
})
export class kontrasttest4_50_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest5(){
    this.navCtrl.push(kontrasttest5_50_Page);
  }
}
