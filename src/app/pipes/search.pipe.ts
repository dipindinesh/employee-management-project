import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if(!value) return [];
    if(!search || search.trim() == '') return value;

    return value.filter( (str:any) => {
          return str['fullName'].toLowerCase().includes(search.toLowerCase()) || str['position'].toLowerCase().includes(search.toLowerCase()) || str['company'].toLowerCase().includes(search.toLowerCase());
        });
   }
}
