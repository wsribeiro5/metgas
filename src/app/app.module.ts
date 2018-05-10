
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './Principal/principal.component';
//import { ListarRevendedoresComponent } from './revendedores/listar/listar-revendedores.component';
import { CadRevendedoresComponent } from './Revendedores/cad-revendedores/cad-revendedores.component';



//import { CadClienteComponent } from './clientes/cad-cliente/cad-cliente.component';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    CadRevendedoresComponent,
    //CadClienteComponent,
    FormDebugComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing,
    //LoginModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
