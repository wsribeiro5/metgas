import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  get_location() {
    navigator.geolocation.getCurrentPosition(this.mostra_location);
  }

  mostra_location (posicao) {
    console.log(posicao);

    this.title = `Latitude: ${posicao.coords.latitude} e Longitude ${posicao.coords.longitude}`;
    alert(this.title);//JSON.stringify(posicao) +
  }

}
