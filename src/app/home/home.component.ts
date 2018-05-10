import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import moipSdk from '../../../node_modules/moip-sdk-node'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header = new Headers();
  constructor(
    private http: Http
  ){
    this.header.append("Authorization","OAuth db697fb38cd540da9ee77510c0a3394c_v2");
    this.header.append("content-type","application/json");
   }

  ngOnInit() {


  }

  //comprar () {
    //this.http.get('https://sandbox.moip.com.br/v2/accounts/exists?tax_document=009.444.731-48',
    //{headers: this.header})
    //this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    //.map (res = res)
    //.subscribe(dados => console.log(dados));
 // }

  criar () {
    console.log("criar");

    //this.criarUsuario();
    //this.criarCliente();
    this.criarPedido ();
    //this.consultarVendedor ();
  }

  consultarVendedor () {

    //Primary

    //Eveline Gas e agua PJ -> 468.851.420-42 - MPA-98B6B1854524 - deec411778d4494b9b348e8ffa6ab455_v2
    //evelineassuncao@gmail.com


    //Secondary

    //Wellyngton Sampaio classic -> MPA-4F52C43EE789 -> db697fb38cd540da9ee77510c0a3394c_v2
    //009.444.731-48 - wsribeiro5@hotmail.com

    //Artur Miguel -> 400.761.560-87 - MPA-B1A25B0C6EDB - 0f4d2855aac54c7ab01ddae5f2c0ac8b_v2
    //arturmiguel@hotmail.com

    //Clientes
    //Terezinha -> CUS-29YCYSQPEXZ3


    //Ana Lyvia Sampaio       -> MPA-C0FEA4A96B83 - 397.504.590-67 - analyvia@hotmail.com
    //Wevelyn Sampaio Classic  -> MPA-B127B5F40916 - 992.811.840-01 - wsribeiro5@hotmail.com



    this.http.get('https://sandbox.moip.com.br/v2/accounts/MPA-6C3CFC517772',
     { headers: this.header})
    .subscribe(dados => console.log(dados));
  }

  criarPedido () {
    let p = this.getPedido();

    this.http.post('https://sandbox.moip.com.br/v2/orders/',
    JSON.stringify(p), { headers: this.header})
    .subscribe(dados => console.log(dados));

  }

  getPedido () {

    return {
      "ownId": "2",
      "amount": {
        "currency": "BRL",
        "subtotals": {
          "shipping": 0
        }
      },
      "items": [
        {
          "product": "Gaz de cozinha 13 kg",
          "category": "RETAIL", //OTHER_APPAREL
          "quantity": 1,
          "detail": "Mais info...",
          "price": 10000
        }
      ],
      "customer": {
        "id": "CUS-29YCYSQPEXZ3"
      },
      "receivers": [
        {
          "type": "PRIMARY",
          "feePayor": false,
          "moipAccount": {
            "id": "MPA-98B6B1854524" // Eveline Gas e agua
          },
          "amount": {
            "percentual": 90
          }
        },
        {
          "type": "SECONDARY",
          "feePayor": true,
          "moipAccount": {
            "id": "MPA-4F52C43EE789" //Wellyngton Sampaio Sistema
          },
          "amount": {
            "percentual": 9.4
          }
        },
        {
          "type": "SECONDARY",
          "feePayor": false,
          "moipAccount": {
            "id": "MPA-B1A25B0C6EDB" //Arthur Miguel
          },
          "amount": {
            "percentual": 0.6
          }
        }
      ]
    };
  }

  criarCliente () {
    //https://sandbox.moip.com.br/v2/customers


    let p = this.getCliente();

    this.http.post('https://sandbox.moip.com.br/v2/customers',
    JSON.stringify(p), { headers: this.header})
    .subscribe(dados => console.log(dados));
  }

  getCliente () {
    return {
      "ownId": "2",
      "fullname": "Terezinha Sampaio",
      "email": "terezinha@email.com",
      "birthDate": "1990-10-22",
      "taxDocument": {
        "type": "CPF",
        "number": "052.723.630-60"
      },
      "phone": {
        "countryCode": "55",
        "areaCode": "11",
        "number": "55552266"
      },
      "shippingAddress": {
        "city": "São Paulo",
        "complement": "10",
        "district": "Itaim Bibi",
        "street": "Avenida Faria Lima",
        "streetNumber": "500",
        "zipCode": "01234000",
        "state": "SP",
        "country": "BRA"
      }
    };
  }

  criarUsuario() {

    //let usu = this.GetUsuarioPJ();

    let usu = this.GetUsuarioPF();

    this.http.post('https://sandbox.moip.com.br/v2/accounts/',
    JSON.stringify(usu), { headers: this.header})
    .subscribe(dados => console.log(dados));
  }

  GetUsuarioPF () // Usuario Classic com login e senha
  {
    return {
      "email":{
         "address":"arturmiguel@hotmail.com"
      },
      "person":{
         "name":"Artur Miguel",
         "lastName":"Sampaio",
         "taxDocument":{
            "type":"CPF",
            "number":"400.761.560-87"
         },
         "identityDocument":{
            "type":"RG",
            "number":"434322344",
            "issuer":"SSP",
            "issueDate":"2000-12-12"
         },
         "birthDate":"1990-01-01",
         "phone":{
            "countryCode":"55",
            "areaCode":"11",
            "number":"965213244"
         },
         "address":{
            "street":"Rua D",
            "streetNumber":"2927",
            "district":"Jardim Imperial",
            "zipCode":"01234-000",
            "city":"Cuiabá",
            "state":"MT",
            "country":"BRA"
          }
      },
      "type":"MERCHANT",
      "transparentAccount": true
   };
  }

  GetUsuarioPJ () {
    return {
      "email": {
          "address": "evelineassuncao@gmail.com"
      },
      "person":{
        "name":"Eveline",
        "lastName":"Assuncao",
        "taxDocument":{
           "type":"CPF",
           "number":"468.851.420-42"
        },
        "identityDocument":{
           "type":"RG",
           "number":"434322344",
           "issuer":"SSP",
           "issueDate":"2000-12-12"
        },
        "birthDate":"1990-01-01",
        "phone":{
           "countryCode":"55",
           "areaCode":"11",
           "number":"965213244"
        },
        "address":{
           "street":"Rua D",
           "streetNumber":"2927",
           "district":"Jardim Imperial",
           "zipCode":"01234-000",
           "city":"Cuiabá",
           "state":"MT",
           "country":"BRA"
        }
     },
      "company": {
          "name": "Eveline 000.000.123.321",
          "businessName": "Eveline Gas e Agua",
          "taxDocument": {
              "type": "CNPJ",
              "number": "20.271.317/0001-70"
          },
          "phone": {
            "countryCode": "55",
            "areaCode": "85",
            "number": "999968792"
        },
        "address": {
            "street": "Av. Gonçalves dias",
            "streetNumber": "100",
            "district": "Centro",
            "zipCode": "68000-000",
            "city": "Fortaleza",
            "state": "CE",
            "country": "BRA"
          }
        },
      "type": "MERCHANT",
      "transparentAccount": true
  };

  }
}
