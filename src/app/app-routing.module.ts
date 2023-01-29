import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const LoginModule = () => import('./login/login.module').then(x => x.LoginModule);
const SuperAdminModule = () => import('./super-admin/super-admin.module').then(x => x.SuperAdminModule);

const routes: Routes = [
  {
  path:'',
  loadChildren:LoginModule
},
{
  path:'sAdmin',
  loadChildren:SuperAdminModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
