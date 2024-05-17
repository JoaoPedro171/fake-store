import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtra'
})
export class FiltraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
