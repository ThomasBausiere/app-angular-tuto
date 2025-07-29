import { Component } from '@angular/core';
import { OrdertablePipe } from '../../utils/ordertable-pipe';
type Order = "asc" | "dsc"
 
@Component({
  selector: 'app-ac-exercice',
  imports: [OrdertablePipe],
  templateUrl: './ac-exercice.html',
  styleUrl: './ac-exercice.css'
})
export class AcExercice {
  series:string[] = ["Lost", "Breaking Bad", "Heroes", "Misfit", "Docteur Who", "Monk", "Ghost Whisperers"];
  order : Order = "asc";

  deleteMovie(i:number):void{
    this.series.splice(i, 1); 
  }

  setOrder(order: Order) :void{    
    this.order = order;
  }

}
