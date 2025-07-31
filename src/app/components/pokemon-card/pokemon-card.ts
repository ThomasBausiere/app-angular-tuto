import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() delete = new EventEmitter<any>();

  deleteData(){
    const index = this.pokedex.indexOf(this.pokemon)
    console.log(index);
    
    this.delete.emit(this.pokedex.splice(index, 1));
  }
  
}
