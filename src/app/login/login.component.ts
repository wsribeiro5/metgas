import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { Usuario } from './../entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  user: Usuario;


  constructor(
   //  private LoginService,
     private router: Router) {

     }

  ngOnInit() {
  }

  logar () {

    //this.LoginService.logar(this.user);

    console.log("esperando validacao do servidor");


    this.router.navigate(['/principal']);
  }

}
