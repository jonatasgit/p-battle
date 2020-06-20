import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './pokemon';

import { tap, delay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemon(url){
    return this.http.get<Pokemon>(url)
      .pipe(
        //tap(console.log)
      );
  }
  
  private pokemonBehavior: BehaviorSubject<Pokemon> = new BehaviorSubject(new Pokemon);
  //currentPokemon: Observable<Pokemon> = this.pokemonBehavior.asObservable();

  changeImgPokemon(poke: Pokemon){
    this.pokemonBehavior.next(poke);
  }

  getImgPokemon(){
    return this.pokemonBehavior;
  }
  
}
