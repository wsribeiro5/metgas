import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './Principal/principal/principal.component';

import { CadastrarRevendedoresComponent } from './revendedores/cad-revendedores/cadastrar-revendedores.component';


const appRouters: Routes = [
    { path: 'home', component:  HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'revendedores', component: CadastrarRevendedoresComponent },
    { path: 'principal', component: PrincipalComponent }



    //{ path: 'naoEncontrado', component: NaoEncontradoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
