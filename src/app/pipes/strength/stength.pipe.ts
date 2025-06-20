import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stength'
})
export class StengthPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
