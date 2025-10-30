import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
})
export class PercentagePipe implements PipeTransform {
  transform(score: any, total: any, decimal = 2): unknown {
    console.log('Percentage Pipe Called...');
    return ((score / total) * 100).toFixed(decimal) + '%';
  }
}
