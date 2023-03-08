import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyStatusComponent } from './company-status/company-status.component';
import { UserCreationPanelComponent } from './user-creation-panel/user-creation-panel.component';
import { SuperViewComponent } from './super-view/super-view.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  {
      path: '', component: SuperViewComponent,
      children: [
          { path: '', component: CompanyStatusComponent },
          { path: 'createCompanies', component: UserCreationPanelComponent },
          { path: 'reportCompanies', component: ReportsComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
