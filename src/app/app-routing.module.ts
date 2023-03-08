import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AuthgardGuard } from './authgard.guard';
import { LoginGuardGuard } from './login-guard.guard';


const LoginModule = () => import('./login/login.module').then(x => x.LoginModule);
const NewModule = () => import('./company-creation/company-creation.module').then(x => x.CompanyCreationModule);
const SuperAdminModule = () => import('./super-admin/super-admin.module').then(x => x.SuperAdminModule);
const DashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyInfoComponent } from './company-info/company-info.component';


const extraOptions: ExtraOptions = {
  "enableTracing": true
};

const routes: Routes = [
  {
    path: '',
    canLoad: [AuthgardGuard],
    component: HomepageComponent
  },
  {
    path: 'newUser',
    component: CompanyInfoComponent
  },
  {
    path: 'login',
    canLoad: [LoginGuardGuard],
    loadChildren: LoginModule
  },
  {
    path: 'sAdmin',
    canLoad: [AuthgardGuard],
    loadChildren: SuperAdminModule
  },
  {
    path: 'dashboard',
    canLoad: [AuthgardGuard],
    loadChildren: DashboardModule
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
