import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   maxBuffer: boolean = false;
   inactive: boolean[] = [false, false, false, false, false, false, false, false, false];


   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item: {name: string, mass: number}){
    let i = this.equipmentItems.indexOf(item);
    if(this.cargoMass >= this.maximumAllowedMass || (this.cargoMass+item.mass) >= this.maximumAllowedMass){
      this.inactive[i] = true;
    } else {
    this.cargoHold.push(item);
    this.cargoMass += item.mass;
    this.inactive[i] = false;
    }
    if(this.maximumAllowedMass-this.cargoMass >= 200) {
      this.maxBuffer = true;
    }
    return this.inactive[i];
   }
   
}
