import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullnamePipe implements PipeTransform {

  transform(name: string, surname:string): unknown {
    return `${name} ${surname}`;
  }

}