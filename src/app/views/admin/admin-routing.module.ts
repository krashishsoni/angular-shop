import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

//Created to manage routing inside the admin folder 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }