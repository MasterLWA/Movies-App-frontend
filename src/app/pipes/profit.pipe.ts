import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profit'
})
export class ProfitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
