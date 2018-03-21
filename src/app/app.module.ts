import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RevendedoresModule } from './revendedores/revendedores.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    RevendedoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
