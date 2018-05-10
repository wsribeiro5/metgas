import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    //this.get_location();
  }

  get_location() {
    navigator.geolocation.getCurrentPosition(this.mostra_location);
  }

  mostra_location(posicao) {
    console.log(posicao);

    let title = `A sua localização é \nLatitude: ${posicao.coords.latitude} e Longitude ${posicao.coords.longitude}`;
    alert(title);

  }




}
