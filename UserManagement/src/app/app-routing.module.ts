
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedServicesModule } from './shared/shared-services.module';
const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
}),
SharedServicesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
