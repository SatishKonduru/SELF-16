import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], filterBy: string) {
    if (filterBy === 'all') {
      return list;
    } else {
      return list.filter((std) => std.gender === filterBy);
    }
  }
}
