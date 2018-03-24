
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { RevendedoresModule } from './revendedores/revendedores.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './Principal/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent

  ],
  imports: [
    BrowserModule,
    RevendedoresModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
