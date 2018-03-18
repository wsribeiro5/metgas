import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RevendedoresComponent } from './revendedores/revendedores.component';


@NgModule({
  declarations: [
    AppComponent,
    RevendedoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
