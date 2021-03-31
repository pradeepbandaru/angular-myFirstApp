import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplepipe'
})
export class SamplepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
