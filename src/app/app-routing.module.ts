import { CadRevendedoresComponent } from './Revendedores/cad-revendedores/cad-revendedores.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './Principal/principal.component';
//import { CadClienteComponent } from './clientes/cad-cliente/cad-cliente.component';

const appRouters: Routes = [
    { path: 'home', component:  HomeComponent},
    { path: 'login', component: CadRevendedoresComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'revendedor', component: CadRevendedoresComponent }



   // { path: 'cliente', component: CadClienteComponent }

    //{ path: 'naoEncontrado', component: NaoEncontradoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
