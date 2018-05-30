import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SehtestSnellen2Page } from '../sehtestSnellen2/sehtestSnellen2';
import { MidataService } from '../../services/midataService';
import { Midata } from 'Midata';
import { Observation } from 'midata';


@Component({
  selector: 'page-sehtestSnellen1',
  templateUrl: 'sehtestSnellen1.html'
})
export class SehtestSnellen1Page {

  value:number;
  private midataService: MidataService;

 constructor(public navCtrl: NavController,  midataService: MidataService) {
  this.midataService = midataService;
  }
  goSnellen2(value: number){
    
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
              "system": "http://snomed.info/sct",
              "code": "422673001",
              "display": "Snellen visual acuity"
            }
          ]
        },
        "effectiveDateTime": new Date().toISOString(),
        "component": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://midata.coop/SnellenLevel",
                  "code": "SnellenLevel_L3",
                  "display": "Snellen level L3"
                }
              ]
            },
            "valueQuantity":{
              "value": value 
            }

          }
        ]
      }
    
    // var x = new Observation({_dateTime: new Date().toISOString()}, TOBeDefined, ToBeDefined);
    // x.addProperty

    console.log(fhir);
    this.value = value;
    this.midataService.save(fhir);
    this.value = value;
    console.log("Value is " + value);
    this.navCtrl.push(SehtestSnellen2Page);
  }
}
