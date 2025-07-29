import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordertable',
  standalone:true
})
export class OrdertablePipe implements PipeTransform {  

  transform(value: string[]): string[]  {
   
     return value.sort();

  }
}
