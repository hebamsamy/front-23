import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDTOEGP'
})
export class USDTOEGPPipe implements PipeTransform {

  transform(value: number): number {
    return value*30;
  }

}
