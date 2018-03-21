import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevendedoresComponent } from './revendedores/revendedores.component';

const appRouters: Routes = [
    { path: '', component: RevendedoresComponent},
    //{ path: 'login', component: LoginComponent},
    //{ path: 'naoEncontrado', component: NaoEncontradoComponent}
];

@NgModule({

    imports:
    [
        RouterModule.forRoot(appRouters)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {}
