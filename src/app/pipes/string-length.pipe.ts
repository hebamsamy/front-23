import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StringLength'
})
export class StringLengthPipe implements PipeTransform {

  transform(value: string, length:number): string {
    //ejchjxhcjxjcb
    //ejchj...
    return value.substring(0,length) +"..."
  }

}
