import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperAdminModule } from './super-admin/super-admin.module';
// import { CompanyCreationModule } from './company-creation/company-creation.module';
import { CompanyInfoComponent } from './company-info/company-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CompanyInfoComponent,
    // PanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    SuperAdminModule,
    // CompanyCreationModule
    // BrowserAnimationsModule,
    // LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
