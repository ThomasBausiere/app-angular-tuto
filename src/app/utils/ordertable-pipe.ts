import { Pipe, PipeTransform } from '@angular/core';


type Order = "asc" | "dsc"
@Pipe({
  name: 'ordertable',
  standalone:true
})
export class OrdertablePipe implements PipeTransform {  

  transform(value: string[], order : Order): string[]  {
   
     return order ==="asc" ? [...value].sort():[...value].sort().reverse();

  }
}
