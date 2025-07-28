import { Component } from '@angular/core';

@Component({
  selector: 'app-aa-exercice',
  imports: [],
  templateUrl: './aa-exercice.html',
  styleUrl: './aa-exercice.css'
})
export class AaExercice {
  counter : number = 0

  increment() : void {
    this.counter++
  }

  decrement() : void {
    this.counter--
  }

  get color(): string {
    return this.counter % 2 ? "red" : "green"
  }

}
