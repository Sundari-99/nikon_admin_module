import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatListModule} from '@angular/material/list';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GlobalSurveyComponent } from './global-survey/global-survey.component';
import { SurveyOneComponent } from './survey-one/survey-one.component';
import { CountryAdminComponent } from './country-admin/country-admin.component';
import { GlobalAdminComponent } from './global-admin/global-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    LoginComponent,
    HomeComponent,
    ToolbarComponent,
    GlobalSurveyComponent,
    SurveyOneComponent,
    CountryAdminComponent,
    GlobalAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, MatSortModule, MatTableModule, MatDialogModule, MatTooltipModule, 
    MatSnackBarModule, MatExpansionModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
