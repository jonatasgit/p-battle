import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-battle';

  pokedexAppear: boolean = false;

  showPokedex() {
    this.pokedexAppear = !this.pokedexAppear;
  }
}
