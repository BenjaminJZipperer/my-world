import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.css']
})
export class FlightDataComponent implements OnInit 
{

  constructor()
   { 
       console.log("talking about data ");

   }

  ngOnInit(): void
  {

  }

}
