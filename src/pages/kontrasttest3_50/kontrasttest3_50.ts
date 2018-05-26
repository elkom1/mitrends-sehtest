import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest4_50_Page } from '../kontrasttest4_50/kontrasttest4_50';


@Component({
  selector: 'page-kontrasttest3_50',
  templateUrl: 'kontrasttest3_50.html'
})
export class kontrasttest3_50_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest4(){
    this.navCtrl.push(kontrasttest4_50_Page);
  }
}
