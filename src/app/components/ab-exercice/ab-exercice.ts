import { Component } from '@angular/core';

@Component({
  selector: 'app-ab-exercice',
  imports: [],
  templateUrl: './ab-exercice.html',
  styleUrl: './ab-exercice.css'
})
export class AbExercice {

  series:string[] = ["Lost", "Breaking Bad", "Heroes", "Misfit", "Docteur Who", "Monk", "Ghost Whisperers"];

  deleteMovie(i:number):void{
    this.series.splice(i, 1); 
  }

}
