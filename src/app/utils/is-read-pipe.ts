import { Pipe, PipeTransform } from '@angular/core';
import { Library } from '../components/library/library';


type isAlreadyRead = "true" | "false";
@Pipe({
  name: 'isRead',
  standalone:true
})
export class IsReadPipe implements PipeTransform {

  transform(value: boolean ): string {
    return value ? "👍" : "👎";
  }

}
