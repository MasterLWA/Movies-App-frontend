import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profit'
})
export class ProfitPipe implements PipeTransform {

  transform(value:number, profitPer= 10 ): number {
        return value*profitPer/100;
  }



}
