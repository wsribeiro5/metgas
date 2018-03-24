import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarRevendedoresComponent } from './cad-revendedores/cadastrar-revendedores.component';
import { EdRevendedoresComponent } from './ed-revendedores/ed-revendedores.component';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

    CadastrarRevendedoresComponent,

    EdRevendedoresComponent
  ]
})
export class RevendedoresModule { }
