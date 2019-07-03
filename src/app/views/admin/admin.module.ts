import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import {DashboardModule } from './dashboard/dashboard.module'


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardModule
  ],
  exports:[DashboardModule],
  declarations: []
})
export class AdminModule { }