/*Pipe for filtering an array of objects*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterarrayob',
  pure: false
})
export class FilterArrayObPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if(!items || !filter) {
      return items;
    }
    return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
  
}
