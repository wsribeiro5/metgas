

import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './Principal/principal.component';
import { ListarRevendedoresComponent } from './revendedores/listar/listar-revendedores.component';
import { CadRevendedoresComponent } from './Revendedores/cad-revendedores/cad-revendedores.component';

import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    ListarRevendedoresComponent,
    CadRevendedoresComponent

  ],
  imports: [
    BrowserModule,
    routing,
    LoginModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
