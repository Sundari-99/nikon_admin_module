import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryAdminComponent } from './country-admin/country-admin.component';
import { GlobalAdminComponent } from './global-admin/global-admin.component';
import { GlobalSurveyComponent } from './global-survey/global-survey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SurveyOneComponent } from './survey-one/survey-one.component';



const routes: Routes = [
  { path :'', redirectTo:'admin',pathMatch:'full'},
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/home', component: HomeComponent },
  { path: 'admin/survey', component: GlobalSurveyComponent},
  { path: 'admin/survey_1', component: SurveyOneComponent},
  { path: 'admin/global-admin', component: GlobalAdminComponent},
  { path: 'admin/country-admin', component: CountryAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
