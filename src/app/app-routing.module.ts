import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const LoginModule = () => import('./login/login.module').then(x => x.LoginModule);
const SuperAdminModule = () => import('./super-admin/super-admin.module').then(x => x.SuperAdminModule);
const DashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);


const routes: Routes = [
  {
  path:'',
  loadChildren:LoginModule
},
{
  path:'sAdmin',
  loadChildren:SuperAdminModule
},
{
  path:'dashboard',
  loadChildren:DashboardModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
