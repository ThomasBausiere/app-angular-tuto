import { Component, Input } from '@angular/core';
import { Pokemon } from '../../utils/types/pokemon.type';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  @Input()pokedex! :Pokemon[]
  @Input()pokemon! :Pokemon

  
}
