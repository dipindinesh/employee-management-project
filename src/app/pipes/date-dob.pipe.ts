import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateDob'
})
export class DateDobPipe implements PipeTransform {

  transform(value: any): any {
    return moment(new Date(value)).format("DD/MM/YYYY");
  }

}
