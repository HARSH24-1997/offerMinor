import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperViewComponent } from './super-view/super-view.component';
import { UserCreationPanelComponent } from './user-creation-panel/user-creation-panel.component';
import { CompanyStatusComponent } from './company-status/company-status.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    SuperViewComponent,
    UserCreationPanelComponent,
    CompanyStatusComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
