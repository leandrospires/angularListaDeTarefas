import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(data: string): string {
    const cleanData = (data ?? '').replace(/\D/g, '');
    return `${cleanData.substring(0, 2)}/${cleanData.substring(2,4)}/${cleanData.substring(4,9)}`;

  }

}
