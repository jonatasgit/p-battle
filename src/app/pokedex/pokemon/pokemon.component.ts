import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PokemonApiService } from './pokemon-api.service';
import { Pokemon } from './pokemon';

import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


@Input() urlPokemon: string;
@ViewChild('imgUrl',  {static: false}) imgPokemon: ElementRef;
@Output() imgOut = new EventEmitter();

pokemon$: Observable<Pokemon>;

  constructor(private service: PokemonApiService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.pokemon$ = this.service.getPokemon(this.urlPokemon);    
    
    
  }

  onClickImg(poke: Pokemon){
    console.log(poke)
    this.service.changeImgPokemon(poke);
  }
  
}
