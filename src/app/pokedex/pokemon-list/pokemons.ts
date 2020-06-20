import { Pokemon } from '../pokemon/pokemon';

export interface Pokemons{
    count: any;
    next: string;
    previous: string;
    results: Pokemon[];
}