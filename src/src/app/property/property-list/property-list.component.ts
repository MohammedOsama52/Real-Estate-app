import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {


  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name":"Erose Villa",
      "Type":"Villa",
      "Price":20000
    },
    {
      "Id":3,
      "Name":"Tata House",
      "Type":"House",
      "Price":19500
    },
    {
      "Id":4,
      "Name":"Micro House",
      "Type":"House",
      "Price":11400
    },
    {
      "Id":5,
      "Name":"Macro House",
      "Type":"House",
      "Price":14300
    },
    {
      "Id":6,
      "Name":"Pearl White House",
      "Type":"House",
      "Price":18000
    }
]

  constructor() { }

  ngOnInit(): void {
  }
  
}
