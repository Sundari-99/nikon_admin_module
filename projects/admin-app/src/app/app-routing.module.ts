import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path :'', redirectTo:'admin/login',pathMatch:'full'},
  { path: 'admin/login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'admin/home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'admin/main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
