import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { kontrasttest4_100_Page } from '../kontrasttest4_100/kontrasttest4_100';


@Component({
  selector: 'page-kontrasttest3_100',
  templateUrl: 'kontrasttest3_100.html'
})
export class kontrasttest3_100_Page {

 constructor(public navCtrl: NavController) {
  }
  goKontrastTest4(){
    this.navCtrl.push(kontrasttest4_100_Page);
  }
}
