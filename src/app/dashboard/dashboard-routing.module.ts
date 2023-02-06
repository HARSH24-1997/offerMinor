import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponentComponent } from './view-component/view-component.component';
import { EmployessComponent } from './employess/employess.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
      path: '', component: ViewComponentComponent,
      children: [
          { path: '', component: EmployessComponent },
          { path: 'addEmployees', component: UserCreationComponent },
          { path: 'report', component: ReportsComponent },
          { path: 'Profile', component: ProfileComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
