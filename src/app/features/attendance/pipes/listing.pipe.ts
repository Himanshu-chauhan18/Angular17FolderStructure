import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listing',
  standalone: true
})
export class ListingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
