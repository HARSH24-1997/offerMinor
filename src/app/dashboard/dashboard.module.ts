import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ReportsComponent } from './reports/reports.component';
import { EmployessComponent } from './employess/employess.component';
import { ProfileComponent } from './profile/profile.component';
import { ImportExportsComponent } from './import-exports/import-exports.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { PanCardDetailsComponent } from './pan-card-details/pan-card-details.component';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { AlertCompanyComponent } from './alert-company/alert-company.component';


@NgModule({
  declarations: [
    UserCreationComponent,
    ReportsComponent,
    EmployessComponent,
    ProfileComponent,
    ImportExportsComponent,
    ViewComponentComponent,
    PanCardDetailsComponent,
    ModalUpdateComponent,
    AlertCompanyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
