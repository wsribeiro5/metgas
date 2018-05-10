import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  verificar(){
    console.log("Chamou!");
    this.http.get('https://sandbox.moip.com.br/v2/customers', JSON.stringify(""))
//    this.http.get('https://sandbox.moip.com.br/v2/accounts/exists?tax_document=444.712.490-45', JSON.stringify(""))
    //this.http.get('https://sandbox.moip.com.br/v2/accounts/exists?tax_document=009.444.731-48', JSON.stringify(""))
    //.map (res = res)
    .subscribe(r => console.log(r))
  }
}
