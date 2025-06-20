import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stength'
})
export class StengthPipe implements PipeTransform {

  transform(value: number): any {
    if(value < 10){
      return value + " (weak)"
    } else if(value >= 10 && value < 20){
      return value + ' (strong)'
    } else{
      return value + ' (strongest)'
    }
  }

}
