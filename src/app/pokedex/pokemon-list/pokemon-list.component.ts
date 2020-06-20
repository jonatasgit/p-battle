import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { PokemonListApiService } from './pokemon-list-api.service';
import { Pokemons } from './pokemons';
import { Observable } from 'rxjs';
import { PokemonApiService } from '../pokemon/pokemon-api.service';
import { BsModalService, BsModalRef  } from 'ngx-bootstrap/modal';
import { Pokemon } from '../pokemon/pokemon';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [
    {provide: CarouselConfig, useValue: { interval: 500, noPause: true, showIndicators: true }}
  ]
})
export class PokemonListComponent implements OnInit {

  pokemons$: Observable<Pokemons>;
  pokemonSelected: Pokemon;
  modalRef: BsModalRef;
  
  constructor(private pokemonsService: PokemonListApiService,
              private pokemonService: PokemonApiService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonsService.listPokemons();

    this.pokemonService.getImgPokemon()
      .subscribe( val => this.pokemonSelected = val);
  }
   
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
