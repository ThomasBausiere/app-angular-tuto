import { Component } from '@angular/core';
import { OrdertablePipe } from '../../utils/ordertable-pipe';

@Component({
  selector: 'app-ac-exercice',
  imports: [OrdertablePipe],
  templateUrl: './ac-exercice.html',
  styleUrl: './ac-exercice.css'
})
export class AcExercice {
  series:string[] = ["Lost", "Breaking Bad", "Heroes", "Misfit", "Docteur Who", "Monk", "Ghost Whisperers"];
  public isSorted = true;
  deleteMovie(i:number):void{
    this.series.splice(i, 1); 
  }

  sortArray(value: string[]):string[]{    
      return value.sort();
  }

    sortArrayDesc(value: string[]):string[]{    
      return value.reverse();
  }
}
