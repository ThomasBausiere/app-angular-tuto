import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pokemon } from '../../utils/types/pokemon.type';
import { PokemonCard } from '../pokemon-card/pokemon-card';

@Component({
  selector: 'app-ad-exercice',
  imports: [FormsModule, ReactiveFormsModule, PokemonCard],
  templateUrl: './ad-exercice.html',
  styleUrl: './ad-exercice.css',
})
export class AdExercice {
  pokemon: Pokemon = {
    name: '',
    description: '',
    type: [],
    attaque: {
      name: '',
      description: '',
      damage: 0,
      type: '',
    },
  };
  pokedex:Pokemon[] =[]
  pokemon_form: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      type: new FormArray([new FormControl('')]),
      attaque: new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        damage: new FormControl(0, [Validators.required]),
        type: new FormControl('', [Validators.required]),
      }),
    },
    [Validators.required]
  );

  savePokemon(): void {
    if (this.pokemon_form.valid) {
      this.pokemon = this.pokemon_form.value;
      console.log('Pokemon : ', this.pokemon);
      this.pokedex.push(this.pokemon_form.value)
      console.log(this.pokedex);
      
      this.pokemon_form.reset();
    }
  }

  get type() {
    return this.pokemon_form.controls['type'] as FormArray;
  }

  addType(): void {
    this.type.push(new FormControl(''));
  }



}
