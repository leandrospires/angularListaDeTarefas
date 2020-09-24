import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contato'
})
export class ContatoPipe implements PipeTransform {

  transform(tel: string): string {
    const cleanTel = (tel ?? '').replace(/\D/g, '');
    return `(${cleanTel.substring(0, 2)}) ${cleanTel.substring(2, 7)}-${cleanTel.substring(7,  cleanTel.length )}`

  }

}
