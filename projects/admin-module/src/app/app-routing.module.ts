import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalSurveyComponent } from './global-survey/global-survey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path :'', redirectTo:'admin/login',pathMatch:'full'},
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/home', component: HomeComponent },
  { path: 'admin/survey', component: GlobalSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }