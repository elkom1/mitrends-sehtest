import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestAnleitung3Page } from '../sehtestAnleitung3/sehtestAnleitung3';
import { MidataService } from '../../services/midataService';
import { Midata } from 'Midata';
import { Observation } from 'midata';


@Component({
  selector: 'page-sehtestAnleitung2',
  templateUrl: 'sehtestAnleitung2.html'
})
export class SehtestAnleitung2Page {

  value: number;
  private midataService: MidataService;
  
  constructor(public navCtrl: NavController, midataService: MidataService) {
    this.midataService = midataService;
  }
  
  goAnleitung3(value: number){

    let fhir = 
      {
        "resourceType": "Observation",
        "status": "preliminary",
        "category": [
          {
            "coding": [
              {
                "system": "http://hl7.org/fhir/observation-category",
                "code": "survey",
                "display": "Survey"
              }
            ],
            "text": "Survey"
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "66378-1",
              "display": "Do you take cortisone"
            }
          ]
        },
        "effectiveDateTime": new Date().toISOString(),
       
            "valueQuantity":{
              "value": value 
            }
      }
    
    // var x = new Observation({_dateTime: new Date().toISOString()}, TOBeDefined, ToBeDefined);
    // x.addProperty

    console.log(fhir);
    this.value = value;
    this.midataService.save(fhir);
    console.log("Value is " + value);
    this.navCtrl.push(SehtestAnleitung3Page);
  }
}
