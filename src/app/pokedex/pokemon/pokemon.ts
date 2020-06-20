import { Ability } from 'src/app/model/ability';
import { Stat } from 'src/app/model/stat';
import { Type } from 'src/app/model/type';

export class  Pokemon {
    name: string;
    base_experience: any;
    sprites: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    }
    abilities: Ability[];
    stats: Stat[];
    types: Type[];

}