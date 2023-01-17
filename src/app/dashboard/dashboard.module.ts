import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ReportsComponent } from './reports/reports.component';
import { EmployessComponent } from './employess/employess.component';
import { ProfileComponent } from './profile/profile.component';
import { ImportExportsComponent } from './import-exports/import-exports.component';


@NgModule({
  declarations: [
    UserCreationComponent,
    ReportsComponent,
    EmployessComponent,
    ProfileComponent,
    ImportExportsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
