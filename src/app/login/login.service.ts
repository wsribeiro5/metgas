import { Injectable } from '@angular/core';

import { Usuario } from '../entidades/usuario';

@Injectable()
export class LoginService {

  user: Usuario;

  constructor() { }

  public logar (dados: Usuario) {
    dados.podeLogar = false;
    this.user = dados;

    console.log("Foi no servidor e disse q não tem esse usuario cadastrado");

    console.log(this.user.login);

    console.log(this.user.senha);

    return this.user;
  }
}
