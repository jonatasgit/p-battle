import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Pokemons } from './pokemons';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonListApiService {
  private readonly URI = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }
  
  listPokemons() {
    return this.http.get<Pokemons>(this.URI)
      .pipe(
        //tap(console.log)
      );
  }
}
