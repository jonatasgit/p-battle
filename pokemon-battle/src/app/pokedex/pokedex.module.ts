import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';

//NGX imports
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [PokemonComponent, PokedexComponent, PokemonListComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [PokedexComponent]
})
export class PokedexModule { }
