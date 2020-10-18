import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// :) 

//************* */
//import
import { FlightDataComponent } from './flight-data/flight-data.component';
//define
const routes: Routes = [{ path: 'flights', component: FlightDataComponent }];
//////////////////




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
