
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {

  form: FormGroup;


  header = new Headers();
  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  )
     {
      this.header.append("content-type","application/json");
      this.header.append("Authorization","2966d6434ea6470d9c40d63b44dcb647_v2");
     }

  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      dataNascimento: [null],

      usuario: [null]
    });
  }

  cadastrar () {
    console.log(this.form);
    //
    this.http.get('https://sandbox.moip.com.br/v2/accounts/exists?tax_document=00944473148', null)
    //this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    //.map (res = res)
    .subscribe(dados => console.log(dados));
  }
}


// Criando um pedido simples
/*
{
  "ownId": "pedido_xyz",
  "items": [
    {
      "product": "Botijão 13kg",
      "quantity": 1,
      "detail": "Botijão de gaz de cozinha com 13 kg",
      "price": 100
    }
  ],
  "customer": {
    "ownId": "cliente_xyz",
    "fullname": "João Silva",
    "email": "joaosilva@email.com"
  }
}


*/
