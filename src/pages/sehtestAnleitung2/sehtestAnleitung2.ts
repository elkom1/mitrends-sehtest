import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestAnleitung3Page } from '../sehtestAnleitung3/sehtestAnleitung3';
import {MidataService } from '../../services/midataService';
import { Midata } from 'Midata';

@Component({
  selector: 'page-sehtestAnleitung2',
  templateUrl: 'sehtestAnleitung2.html'
})
export class SehtestAnleitung2Page {

  value:Boolean;
  midataService: MidataService;
  
  constructor(public navCtrl: NavController, midataService: MidataService) {
    
  }
  goAnleitung3(value: Boolean){

    // let fhir = {
    //   coding: "snomed",
    //   value: value
    // };

    this.value = value;
  //  this.midataService.save(fhir);
    console.log("Value is " + value);
    this.navCtrl.push(SehtestAnleitung3Page);
  }
}
