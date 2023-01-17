import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperViewComponent } from './super-view/super-view.component';
import { UserCreationPanelComponent } from './user-creation-panel/user-creation-panel.component';
import { CompanyStatusComponent } from './company-status/company-status.component';


@NgModule({
  declarations: [
    SuperViewComponent,
    UserCreationPanelComponent,
    CompanyStatusComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
